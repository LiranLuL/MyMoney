import dynamic from "next/dynamic";
import { RoundButton, Label, Logout, Wrapper, UserBalance } from "styles/homeStyles";
import { ModalWin } from "components/Modal";
import { List } from "components/List";
import { getCategories } from "helpers/categories";
import { useState, useEffect, useMemo } from "react";
import UseGetUser from "hooks/useGetUser";
import { Icons } from "styles/icons/incons";
import { logout } from "services/user.service";
import { getBalance } from "services/balance.service";
import { convertForPieChart } from "helpers/convertData";
const MyResponsivePie = dynamic(() => import("components/pie"), { ssr: false });

function Home() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);
  const [entrys, setEntrys] = useState([]);

  const showModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };

  async function fetchExpenses() {
    const username = UseGetUser().username;
    const result = await getCategories(username);
    const balance = await getBalance(username);
    setEntrys((prev) => {
      const equalsEntrys = JSON.stringify(prev) === JSON.stringify(result.categories[0]);
      return equalsEntrys ? prev : result.categories[0];
    });
    const exp = convertForPieChart(result.categories[1]);
    setExpenses((prev) => {
      const equalsEntrys = JSON.stringify(prev) === JSON.stringify(exp);
      return equalsEntrys ? prev : exp;
    });
    setBalance((prev) => {
      return prev === balance.balance ? prev : balance.balance;
    });
  }

  useEffect(() => {
    window.setTimeout(fetchExpenses, 200);
  }, [isShowModal]);

  useEffect(() => {
    fetchExpenses();
    var handle = window.setInterval(fetchExpenses, 5000);
    return () => {
      clearInterval(handle);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <UserBalance>{"Balance: " + balance + "р"}</UserBalance>
        <Logout onClick={logout}>Logout</Logout>
        <ModalWin handleClose={closeModal} isShow={isShowModal} categories={entrys} />
        <MyResponsivePie data={expenses} balance={balance} />
        <RoundButton onClick={showModal}>
          <Icons name="Plus"></Icons>
        </RoundButton>
      </Wrapper>
      <List entrys={expenses} />
    </>
  );
}

export default Home;
