import { gql, useQuery } from "@apollo/client";
import useSigner from "state/signer";
import { NFT_MARKET_ADDRESS } from "./config";
import { parseRawNFT } from "./helpers";
import {
  GetOwnedListedNFTs,
  GetOwnedListedNFTsVariables,
} from "./__generated__/GetOwnedListedNFTs";

const useOwnedListedNFTs = () => {
  const { address } = useSigner();

  const { data } = useQuery<GetOwnedListedNFTs, GetOwnedListedNFTsVariables>(
    GET_OWNED_LISTED_NFTS,
    { variables: { owner: address ?? "" }, skip: !address }
  );
  const ownedListedNFTs = data?.nfts.map(parseRawNFT);

  return { ownedListedNFTs };
};

const GET_OWNED_LISTED_NFTS = gql`
  query GetOwnedListedNFTs($owner: String!) {
    nfts(
      where: {
        to: "0xEAb991De86C24977F6dc94a128dd725eaa73e6c9"
        from: $owner 
      }
    ) {
      id
      from
      to
      tokenURI
      price
    }
  }
`;

export default useOwnedListedNFTs;
