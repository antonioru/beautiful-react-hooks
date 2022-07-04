import { act, cleanup, renderHook } from "@testing-library/react-hooks";

import assertHook from "./utils/assertHook";
import useObjectState from "../dist/useObjectState";

describe("useObjectState", () => {
  beforeEach(() => cleanup());

  assertHook(useObjectState);

  it("should return updated object state", async () => {
    const { result, waitFor } = renderHook(() =>
      useObjectState({ test: "test", test1: "test1" })
    );

    const [state, setState] = result.current;

    expect(state)
      .to.be.an("object")
      .that.has.deep.equal({ test: "test", test1: "test1" });

    act(() => {
      setState({ test1: "it works" });
    });

    await waitFor(() => {
      expect(result.current[0])
        .to.be.an("object")
        .that.has.deep.equal({ test: "test", test1: "it works" });
    });
  });
});
