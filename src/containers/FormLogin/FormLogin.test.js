import React from "react";
import { FormLoginWithoutWithRouter } from "./FormLogin";
import { Provider } from "react-redux";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import ptTranslations from "../../assets/i18n/messages-pt.json";
import { IntlProvider } from "react-intl";
import store from "./../../store";

configure({ adapter: new Adapter() });
const country = "en-US";

const isLogged = () => {
    return localStorage.getItem("TOKEN");
};

describe("FormLogin Component", () => {
    const component = (
        <IntlProvider
            locale={country}
            key={country}
            messages={ptTranslations}
            defaultLocale={country}
        >
            <Provider store={store}>
                <FormLoginWithoutWithRouter isLogged={isLogged} />
            </Provider>
        </IntlProvider>
    );

    it("matches the snapshot", () => {
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("generated a form with two inputs and a button inside", () => {
        const wrapper = mount(component);

        const input = wrapper.find("FormLogin Input input").length;
        expect(input).toEqual(1);

        const inputPassword = wrapper.find("FormLogin InputPassword input")
            .length;
        expect(inputPassword).toEqual(1);

        const loginButton = wrapper.find("FormLogin ButtonStandard button")
            .length;
        expect(loginButton).toEqual(1);
    });
});
