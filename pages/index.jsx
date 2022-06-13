import dynamic from "next/dynamic";
import { RoundButton, Label } from "styles/homeStyles";
import { ModalWin } from "components/Modal";
import { List } from "components/List";
import { getCategories } from "helpers/categories";
import { useState, useEffect } from "react";
import UseGetUser from "hooks/useGetUser";
import Icons from "styles/icons/incons";

const MyResponsivePie = dynamic(() => import("components/pie"), { ssr: false });
function Home() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [entrys, setEntrys] = useState([]);
  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const parseData = (entrys) => {
    const data = entrys.map((entry) => {
      return {
        id: entry.name,
        label: entry.name,
        value: entry.amount,
      };
    });
    setData(data);
  };

  async function fetchData() {
    const username = UseGetUser().username;
    const result = await getCategories(username);
    setEntrys(result.categories);
    parseData(result.categories.filter((entry) => entry.amount > 0));
  }

  useEffect(() => {
    fetchData();
    setInterval(fetchData, 5000);
  }, []);
  return (
    <>
      <div style={{ height: "50vh" }}>
        <ModalWin handleClose={closeModal} isShow={isShowModal} categories={entrys} />
        <MyResponsivePie data={data} />
        {data.length === 0 && <Label>Add something</Label>}
        <RoundButton onClick={showModal}>
          <Icons name="Plus"></Icons>
        </RoundButton>
      </div>
      <List entrys={entrys.filter((entry) => entry.amount > 0)} />
    </>
  );
}

export default Home;
