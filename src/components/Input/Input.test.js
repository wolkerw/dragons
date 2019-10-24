import React from "react";
import Input from "./Input";
import { IntlProvider } from "react-intl";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import messages from "../../assets/i18n";

configure({ adapter: new Adapter() });

const country = "pt";
const language = "pt-BR";
const placeholder = messages[language].login;
const callback = () => {
    console.log("TESTE");
};
const firstInteraction = true;
const loginIsRequired = true;

describe("Input Component", () => {
    const component = (
        <IntlProvider
            locale={country}
            key={country}
            messages={messages[{ country }]}
            defaultLocale={country}
        >
            <Input
                placeholder={placeholder}
                validateCallback={callback}
                firstSubmit={firstInteraction}
                isRequired={loginIsRequired}
            />
        </IntlProvider>
    );

    it("matches the snapshot", () => {
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("generated an input with the correct props", () => {
        const wrapper = mount(component);
        const props = wrapper.children().props();
        expect(props.placeholder).toEqual(placeholder);
        expect(props.firstSubmit).toEqual(firstInteraction);
        expect(props.validateCallback).toEqual(callback);
        expect(props.isRequired).toEqual(loginIsRequired);
    });
});
