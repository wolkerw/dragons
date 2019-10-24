import React from "react";
import Order from "./Order";
import { IntlProvider } from "react-intl";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import messages from "../../assets/i18n";

configure({ adapter: new Adapter() });

const country = "en";

const orderData = {
    id: "5",
    name: "Viserion",
    type: "Ômega"
};

describe("Order Component", () => {
    const component = (
        <IntlProvider
            locale={country}
            key={country}
            messages={messages[{ country }]}
            defaultLocale={country}
        >
            <Order
                data={orderData}
                functionProps={() => true}
                id={orderData.id}
            />
        </IntlProvider>
    );

    it("matches the snapshot", () => {
        const tree = mount(component);
        expect(tree).toMatchSnapshot();
    });

    it("generated an order item with the edit button", () => {
        const wrapper = mount(component);
        const checkbox = wrapper.find("button");
        expect(checkbox.length).toEqual(2);
    });

    it("generated an order item with the columns showing", () => {
        const wrapper = mount(component);
        const checkbox = wrapper
            .find(".text-2")
            .first()
            .text();
        expect(checkbox).toBe("Viserion");
    });
});
