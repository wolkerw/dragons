import React from "react";
import Dragon from "./Dragon";
import { IntlProvider } from "react-intl";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const country = "pt-BR";

const dragonData = {
    id: "5",
    name: "Viserion",
    type: "Ômega"
};

describe("Dragon Component", () => {
    const component = (
        <IntlProvider locale={country}>
            <Dragon
                data={dragonData}
                functionProps={() => true}
                id={dragonData.id}
            />
        </IntlProvider>
    );

    it("matches the snapshot", () => {
        const tree = mount(component);
        expect(tree).toMatchSnapshot();
    });

    it("generated a dragon item with the edit button", () => {
        const wrapper = mount(component);
        const checkbox = wrapper.find("button");
        expect(checkbox.length).toEqual(2);
    });

    it("generated a dragon item with the columns showing", () => {
        const wrapper = mount(component);
        const checkbox = wrapper
            .find(".text-2")
            .first()
            .text();
        expect(checkbox).toBe("Viserion");
    });
});
