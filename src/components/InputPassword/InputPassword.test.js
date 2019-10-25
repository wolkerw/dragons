import React from "react";
import InputPassword from "./InputPassword";
import { IntlProvider } from "react-intl";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
// import messages from "../../assets/i18n";

configure({ adapter: new Adapter() });

const country = "pt-BR";
// const language = "pt-BR";
const placeholder = "Senha";
const callback = () => {
    console.log("TESTE");
};
const firstInteraction = true;

describe("InputPassword Component", () => {
    const component = (
        <IntlProvider
            locale={country}
            // key={country}
            // messages={messages[{ country }]}
            // defaultLocale={country}
        >
            <InputPassword
                placeholder={placeholder}
                validateCallback={callback}
                firstSubmit={firstInteraction}
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
    });
});
