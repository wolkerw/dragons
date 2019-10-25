import React from "react";
import ButtonStandard from "./ButtonStandard";
import { IntlProvider } from "react-intl";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
// import messages from "../../assets/i18n";

const country = "pt-BR";

configure({ adapter: new Adapter() });

describe("ButtonStandard Component", () => {
    const component = (
        <IntlProvider
            locale={country}
            // key={country}
            // messages={messages[{ country }]}
            // defaultLocale={country}
        >
            <ButtonStandard
                textId="Entrar"
                className="btn btn-primary"
                onClick={() => {
                    console.log("FUNCIONOU");
                }}
            />
        </IntlProvider>
    );
    it("matches the snapshot", () => {
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is clickable", () => {
        const wrapper = mount(component);
        expect(wrapper.find(ButtonStandard).simulate("click"));
    });
});
