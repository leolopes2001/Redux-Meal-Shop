import { MenuStyled, Circle } from "./style";
export const Menu = (rest) => {
  return (
    <MenuStyled  {...rest}>
      <Circle />
      <Circle />
      <Circle />
    </MenuStyled>
  );
};

export default Menu;
