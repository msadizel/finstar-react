import { withNavigationWatcher } from "./Contexts/navigation";
import { Items, Create } from "./Pages";

const routes = [
  {
    path: "/Items",
    component: <Items></Items>,
  },
  {
    path: "/Create",
    component: (e) => {
      return <Create {...e} />;
    },
  },
];

export default routes.map((route) => {
  return {
    ...route,
    component: withNavigationWatcher(route.component),
  };
});
