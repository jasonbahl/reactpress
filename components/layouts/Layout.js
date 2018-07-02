import Header from "../ui/Header";
import Root from "../../components/Root";
import Navigation from "../ui/Navigation";
import Container from "../ui/Container";

const Layout = ({ children }) => (
  <Root>
    <Container>
      <Header>
        <h1>REACTPRESS DEMO</h1>
      </Header>
      <Navigation />
      <div>{children}</div>
    </Container>
  </Root>
);

export default Layout;