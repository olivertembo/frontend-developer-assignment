import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import SolutionView from "../../views/SolutionView.vue";

describe("SolutionView", () => {
  it("renders solution view correctly", () => {
    const wrapper = mount(SolutionView);
    const emptyElement = wrapper.get('[data-testid="empty-list"]');
    expect(emptyElement.text()).toContain("Empty list.");
  });
});
