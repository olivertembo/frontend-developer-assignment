import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import GreetingsItem from "../GreetingsItem.vue";

describe("Greetings", () => {
  it("renders properly", () => {
    const wrapper = mount(GreetingsItem, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
