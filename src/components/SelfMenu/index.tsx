import childRoutes from "../../router/routes";
import ConfigClsName from "../../utils/configClsName";
import "./index.scss";

import { useNavigate, useLocation } from "react-router-dom";

interface routeItem {
  path: string;
  name: string;
  children?: Array<routeItem>;
  icon?: string;
  changePath?: string;
}

const prefixCls = "self-menu";

const menuItemCls = (parentSignal: boolean, selectedSignal: boolean) => {
  const output = [
    ConfigClsName(prefixCls, parentSignal ? "parent-item" : "child-item"),
  ];

  if (selectedSignal) {
    output.push(ConfigClsName(prefixCls, "selected-item"));
  }

  return output.join(" ");
};

export default () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  const handleChangePage = (changePath: string): any => {
    navigate(changePath);
  };

  const InitMenu = (routesInfo: Array<routeItem>) => {
    const output: any = [];

    routesInfo.forEach((item: routeItem) => {
      const { path, name, children, icon, changePath } = item;

      output.push(
        <li key={path} className={ConfigClsName(prefixCls, "li-style")}>
          <div
            className={menuItemCls(
              children ? true : false,
              pathname === changePath
            )}
            onClick={
              children
                ? () => {}
                : () => {
                    handleChangePage(changePath ?? "overview/home");
                  }
            }
          >
            {icon ? (
              <img
                src={icon}
                className={ConfigClsName(prefixCls, "menu-icon")}
              ></img>
            ) : null}
            <span>{name}</span>
          </div>
          {children ? <ul>{InitMenu(children)}</ul> : null}
        </li>
      );
    });

    return output;
  };

  return (
    <>
      <ul className={ConfigClsName(prefixCls, "container")}>
        {InitMenu(childRoutes)}
      </ul>
    </>
  );
};
