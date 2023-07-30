import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import SolutionView from "../../views/SolutionView.vue";

describe("SolutionView", () => {
  it("renders the initial task correctly", () => {
    const wrapper = mount(SolutionView);

    const taskElement = wrapper.get('[data-testid="task-item-0"]');
    expect(taskElement.text()).toContain("Go to the moon");
    expect(taskElement.classes()).not.toContain("done");
  });
});
