import React from "react";
import { styled } from "styled-components";
import { useGetListQuery } from "../../../query/list/query";
import Like from "../../../assets/Like";
import { FaRegHeart } from "react-icons/fa";

interface Props {
  date: number;
}

const ListItem = ({ date }: Props) => {
  const { data } = useGetListQuery(date);

  return (
    <>
      {data?.map((data) => (
        <ListContainer>
          <UserName>{data.writerName}</UserName>
          <Content>{data.content}</Content>
          {data.imageUrl !== "" && <ListImage alt="" src={data.imageUrl} />}
          <Flex>
            <FaRegHeart style={{ cursor: "pointer" }} />
            <LikeCount>{data.likeCount}</LikeCount>
          </Flex>
        </ListContainer>
      ))}
    </>
  );
};

export default ListItem;

const Flex = styled.div`
  display: flex;

  margin-top: 10px;
  column-gap: 5px;
`;

const ListImage = styled.img`
  width: 358px;
  height: 142px;
  border-radius: 21px;
`;
const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;

  row-gap: 20px;
`;

const UserName = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 307px;

  padding-top: 9px;

  display: flex;
  flex-direction: column;

  margin-top: 20px;
  gap: 12px;
`;

const Content = styled.p`
  font-size: 16px;
`;

const LikeCount = styled.p`
  font-size: 14px;
  color: #2e2e2e;
`;
