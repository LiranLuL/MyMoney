import { Entry, Category, Price } from "styles/listStyles";
import { Wrapper } from "styles/listStyles";

import { Icons } from "styles/icons/incons";

function List({ entrys }) {
  return (
    <Wrapper>
      {entrys.map((entry) => (
        <Entry key={entry.label}>
          <Icons name={entry.label} />
          <Category>{entry.label}</Category>
          <Price>{Number(entry.value).toLocaleString("ru-RU", { minimumFractionDigits: 2 }) + " ₽"}</Price>
        </Entry>
      ))}
    </Wrapper>
  );
}
export { List };
