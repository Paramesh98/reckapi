import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Button from "../../components/button";
import { store } from "../../redux/store";

describe("component/button", () => {
  const text = "next";
  const onclick = jest.fn();
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Button onclick={onclick} label={text} disabled={false} />
      </Provider>
    </BrowserRouter>
  );
  it("should display test details", () => {
    const label = getByText(text);
    expect(label).toBeInTheDocument();
    fireEvent.click(label);
    expect(onclick).toBeCalled();
  });
});
