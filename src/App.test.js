import { render, screen, cleanup, fireEvent,waitForElement, } from '@testing-library/react';
import App from './App';
afterEach(cleanup);
describe("testing App snapshot and text",()=>{
  it("should match a snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello react/i);
    expect(linkElement).toBeInTheDocument();
  });
})

describe("testing buttons and content",()=>{
  it("default counter value should be present",()=>{
    const { getByTestId } = render(<App />);
    expect(getByTestId("counter")).toHaveTextContent(0);
  })

  it("should be enabled", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
  });
  xit("should be disabled", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("button-down")).toBeDisabled();
  });

  it("increments counter", () => {
    const { getByTestId } = render(<App />);
    fireEvent.click(getByTestId("button-up"));
    expect(getByTestId("counter")).toHaveTextContent("1");
  });
  it("decrements counter", () => {
    const { getByTestId } = render(<App />);
    fireEvent.click(getByTestId("button-down"));
    expect(getByTestId("counter")).toHaveTextContent("-1");
  });

  it("increments async counter", () => {
    const { getByTestId } = render(<App />);
    fireEvent.click(getByTestId("button-up"));
    const counter = waitForElement(() => getByText("1"));
    expect(counter).toHaveTextContent("1");
  });

})


