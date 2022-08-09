import React, { useEffect, useState } from "react";
import Place from "../components/Place";
import myData from "../data/data.json";
import Nav from "../components/Nav";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function places() {
  const [locksList, setLocksList] = useState([]);

  const APIURL =
    "https://api.thegraph.com/subgraphs/name/unlock-protocol/polygon";

  const locksQuery = `
  query {
    locks (first: 5) {
        address
        name
        tokenAddress
        price
        maxNumberOfKeys
    }
  }
`;
  useEffect(() => {
    const client = new ApolloClient({
      uri: APIURL,
      cache: new InMemoryCache(),
    });

    client
      .query({
        query: gql(locksQuery),
      })
      .then(({ data }) => {
        console.log("Subgraph data: ", data);
        setLocksList(data.locks);
        console.log("lockList data: ", locksList);
      })
      .catch((err) => {
        console.log("Error fetching data: ", err);
      });
  }, []);

  return (
    <div>
      <Nav />
      {locksList.map((nft) => (
        <Place nft={nft} key={nft.id} />
      ))}
    </div>
  );
}
