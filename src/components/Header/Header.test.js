import React from "react";
import Header from "./Header";
import { IntlProvider } from "react-intl";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

const country = "pt-BR";

describe("Header Component", () => {
    const component = (
        <IntlProvider locale={country}>
            <Header />
        </IntlProvider>
    );

    it("matches the snapshot", () => {
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("generated an header with a logo", () => {
        const wrapper = mount(component);
        const logo = wrapper.find("p");
        expect(logo.length).toEqual(1);
    });
});
