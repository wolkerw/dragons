import React from "react";
import { FormDragonWithoutWithRouter } from "./FormDragon";
import { Provider } from "react-redux";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import ptTranslations from "../../assets/i18n/messages-pt.json";
import { IntlProvider } from "react-intl";
import store from "../../store";

configure({ adapter: new Adapter() });
const country = "en-US";

describe("FormLogin Component", () => {
    const component = (
        <IntlProvider
            locale={country}
            key={country}
            messages={ptTranslations}
            defaultLocale={country}
        >
            <Provider store={store}>
                <FormDragonWithoutWithRouter />
            </Provider>
        </IntlProvider>
    );

    it("matches the snapshot", () => {
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("generated a form with two inputs and a button inside", () => {
        const wrapper = mount(component);

        const input = wrapper.find("FormDragon Input input").length;
        expect(input).toEqual(2);

        const loginButton = wrapper.find("FormDragon ButtonStandard button")
            .length;
        expect(loginButton).toEqual(1);
    });
});
