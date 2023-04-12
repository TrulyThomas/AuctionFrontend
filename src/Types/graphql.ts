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
  base64data: Scalars['String'];
  id: Scalars['Int'];
  order?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
};

export type ImageInput = {
  base64data: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['Int'];
  images?: Maybe<Array<Maybe<Image>>>;
  initialPrice: Scalars['Float'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
};

export type ItemInput = {
  id?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<Array<InputMaybe<ImageInput>>>;
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

export type GetItemForEditQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetItemForEditQuery = { __typename?: 'Query', getItem?: { __typename?: 'Item', name: string, text?: string | null, id: number, initialPrice: number, quantity: number, images?: Array<{ __typename?: 'Image', base64data: string } | null> | null } | null };

export type EditItemMutationVariables = Exact<{
  item: ItemInput;
}>;


export type EditItemMutation = { __typename?: 'Mutation', newItem?: { __typename?: 'Item', name: string } | null };

export type GetSingleItemQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetSingleItemQuery = { __typename?: 'Query', getItem?: { __typename?: 'Item', name: string, text?: string | null } | null };

export type GetItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemsQuery = { __typename?: 'Query', allItems: Array<{ __typename?: 'Item', name: string }> };

export type CreateItemMutationVariables = Exact<{
  item: ItemInput;
}>;


export type CreateItemMutation = { __typename?: 'Mutation', newItem?: { __typename?: 'Item', id: number } | null };


export const GetItemForEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItemForEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"initialPrice"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base64data"}}]}}]}}]}}]} as unknown as DocumentNode<GetItemForEditQuery, GetItemForEditQueryVariables>;
export const EditItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"item"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"item"},"value":{"kind":"Variable","name":{"kind":"Name","value":"item"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<EditItemMutation, EditItemMutationVariables>;
export const GetSingleItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSingleItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<GetSingleItemQuery, GetSingleItemQueryVariables>;
export const GetItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetItemsQuery, GetItemsQueryVariables>;
export const CreateItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"item"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"item"},"value":{"kind":"Variable","name":{"kind":"Name","value":"item"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateItemMutation, CreateItemMutationVariables>;