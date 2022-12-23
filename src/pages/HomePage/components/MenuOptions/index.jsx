import { useState } from "react";
import { Link } from "react-router-dom";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import Menu from "./Menu";
import { MenuOptionsStyled, NavStyled } from "./style";
import { motion, AnimatePresence } from "framer-motion";
import { BiLogOut } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";

const MenuOptions = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive(!isActive);

  const menuRef = useOutsideClick((e) => {
    if (!e.target.classList.contains("menuOptions")) {
      setIsActive(false);
    }
  });

  return (
    <MenuOptionsStyled>
      <Menu className="menuOptions" onClick={handleClick} isActive={isActive} />

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4 }}
            className="divMotion"
          >
            <NavStyled isActive={isActive} ref={menuRef}>
              <Link to="/cart">
                <FaShoppingCart />
                Cart
              </Link>
              <Link to="/">
                <BiLogOut />
                Sair
              </Link>
            </NavStyled>
          </motion.div>
        )}
      </AnimatePresence>
    </MenuOptionsStyled>
  );
};

export default MenuOptions;
