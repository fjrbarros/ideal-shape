import { act, renderHook } from "@testing-library/react";
import { useScrollPosition } from "./useScrollPosition";

describe("useScrollPosition", () => {
  const originalScrollY = window.scrollY;

  beforeEach(() => {
    window.scrollY = 0;
  });

  afterEach(() => {
    window.scrollY = originalScrollY;
  });

  it("should return false initially", () => {
    const { result } = renderHook(() => useScrollPosition());
    expect(result.current.hasScrollMoved).toBe(false);
  });

  it("should return true when scrollY is greater than the default value", () => {
    const { result } = renderHook(() => useScrollPosition());

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current.hasScrollMoved).toBe(true);
  });

  it("should return false when scrollY is less than the default value", () => {
    const { result } = renderHook(() => useScrollPosition());

    act(() => {
      window.scrollY = 30;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current.hasScrollMoved).toBe(false);
  });

  it("should respect the custom value passed as argument", () => {
    const customValue = 200;
    const { result } = renderHook(() => useScrollPosition(customValue));

    act(() => {
      window.scrollY = 150;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current.hasScrollMoved).toBe(false);

    act(() => {
      window.scrollY = 250;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current.hasScrollMoved).toBe(true);
  });
});
