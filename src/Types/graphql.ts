/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  createdDate: Scalars['String'];
  credits: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  userName: Scalars['String'];
};

export type Auction = {
  __typename?: 'Auction';
  bids?: Maybe<Array<Maybe<Bid>>>;
  closed: Scalars['Boolean'];
  createdDate: Scalars['String'];
  endDate: Scalars['String'];
  extendedTime: Scalars['Float'];
  id: Scalars['Int'];
  items: Array<Item>;
  startDate: Scalars['String'];
  startingPrice: Scalars['Float'];
  winner?: Maybe<Account>;
};

export type Bid = {
  __typename?: 'Bid';
  auction: Auction;
  bid: Scalars['Float'];
  id: Scalars['Int'];
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['Int'];
  url: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['Int'];
  image?: Maybe<Array<Maybe<Image>>>;
  initialPrice: Scalars['Float'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
};

export type ItemInput = {
  id?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  initialPrice?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  quantity?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  newItem?: Maybe<Item>;
};


export type MutationNewItemArgs = {
  item: ItemInput;
};

export type Query = {
  __typename?: 'Query';
  allAuctions?: Maybe<Array<Auction>>;
  allItems: Array<Item>;
  getItem?: Maybe<Item>;
};


export type QueryGetItemArgs = {
  id: Scalars['Int'];
};

export type GetSingleItemQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetSingleItemQuery = { __typename?: 'Query', getItem?: { __typename?: 'Item', name: string, text?: string | null, id: number, initialPrice: number, quantity: number, image?: Array<{ __typename?: 'Image', url: string } | null> | null } | null };

export type NewItSsSemMutationVariables = Exact<{
  item: ItemInput;
}>;


export type NewItSsSemMutation = { __typename?: 'Mutation', newItem?: { __typename?: 'Item', name: string } | null };

export type GetSingleIteSmQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetSingleIteSmQuery = { __typename?: 'Query', getItem?: { __typename?: 'Item', name: string, text?: string | null } | null };

export type GetItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemsQuery = { __typename?: 'Query', allItems: Array<{ __typename?: 'Item', name: string, text?: string | null, image?: Array<{ __typename?: 'Image', url: string } | null> | null }> };

export type NewItemMutationVariables = Exact<{
  item: ItemInput;
}>;


export type NewItemMutation = { __typename?: 'Mutation', newItem?: { __typename?: 'Item', id: number } | null };


export const GetSingleItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSingleItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"initialPrice"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetSingleItemQuery, GetSingleItemQueryVariables>;
export const NewItSsSemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"newItSSSem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"item"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"item"},"value":{"kind":"Variable","name":{"kind":"Name","value":"item"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<NewItSsSemMutation, NewItSsSemMutationVariables>;
export const GetSingleIteSmDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSingleIteSm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<GetSingleIteSmQuery, GetSingleIteSmQueryVariables>;
export const GetItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetItemsQuery, GetItemsQueryVariables>;
export const NewItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"newItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"item"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"item"},"value":{"kind":"Variable","name":{"kind":"Name","value":"item"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<NewItemMutation, NewItemMutationVariables>;