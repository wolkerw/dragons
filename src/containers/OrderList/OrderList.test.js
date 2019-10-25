import React from "react";
import { OrderListWithoutWithRouter } from "./OrderList";
import { IntlProvider } from "react-intl";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
// import messages from "../../assets/i18n";
import { Provider } from "react-redux";
import store from "./../../store";

configure({ adapter: new Adapter() });

const country = "pt-BR";

describe("OrderList Container", () => {
    const component = (
        <IntlProvider
            locale={country}
            // key={country}
            // messages={messages[{ country }]}
            // defaultLocale={country}
        >
            <Provider store={store}>
                <OrderListWithoutWithRouter checkList />
            </Provider>
        </IntlProvider>
    );

    it("matches the snapshot", () => {
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("generated an order list with a header inside", () => {
        const wrapper = mount(component);
        const header = wrapper.find(".order-list-header");
        expect(header.length).toEqual(1);
    });

    it("generated an order list that is loading orders", () => {
        const wrapper = mount(component);
        const loading = wrapper
            .find(".container div")
            .last()
            .text();
        expect(loading).toBe("Carregando...");
    });
});
