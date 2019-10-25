import React from "react";
import { DragonListWithoutWithRouter } from "./DragonList";
import { IntlProvider } from "react-intl";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
// import messages from "../../assets/i18n";
import { Provider } from "react-redux";
import store from "./../../store";

configure({ adapter: new Adapter() });

const country = "pt-BR";

describe("DragonList Container", () => {
  const component = (
    <IntlProvider
      locale={country}
      // key={country}
      // messages={messages[{ country }]}
      // defaultLocale={country}
    >
      <Provider store={store}>
        <DragonListWithoutWithRouter checkList />
      </Provider>
    </IntlProvider>
  );

  it("matches the snapshot", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("generated a dragon list with a header inside", () => {
    const wrapper = mount(component);
    const header = wrapper.find(".dragon-list-header");
    expect(header.length).toEqual(1);
  });

  it("generated a dragon list that is loading dragons", () => {
    const wrapper = mount(component);
    const loading = wrapper
      .find(".container div")
      .last()
      .text();
    expect(loading).toBe("Carregando...");
  });
});
