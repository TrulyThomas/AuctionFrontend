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
  email: Scalars['String'];
  id: Scalars['Int'];
  role: Scalars['String'];
  username: Scalars['String'];
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

export type Credentials = {
  __typename?: 'Credentials';
  accessToken: Token;
  account: Account;
};

export type Image = {
  __typename?: 'Image';
  base64data: Scalars['String'];
  id: Scalars['Int'];
  order: Scalars['Int'];
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
  signup?: Maybe<Account>;
};


export type MutationNewItemArgs = {
  item: ItemInput;
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allAuctions?: Maybe<Array<Auction>>;
  allItems: Array<Item>;
  getItem?: Maybe<Item>;
  login?: Maybe<Credentials>;
  validateUser?: Maybe<Credentials>;
};


export type QueryGetItemArgs = {
  id: Scalars['Int'];
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type QueryValidateUserArgs = {
  token: Scalars['String'];
};

export type Token = {
  __typename?: 'Token';
  expiresInDays: Scalars['Float'];
  token: Scalars['String'];
};

export type LoginUserQueryVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserQuery = { __typename?: 'Query', login?: { __typename?: 'Credentials', account: { __typename?: 'Account', username: string, email: string, createdDate: string, role: string }, accessToken: { __typename?: 'Token', token: string, expiresInDays: number } } | null };

export type ValidateUserQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type ValidateUserQuery = { __typename?: 'Query', validateUser?: { __typename?: 'Credentials', account: { __typename?: 'Account', username: string, email: string, createdDate: string, role: string }, accessToken: { __typename?: 'Token', token: string, expiresInDays: number } } | null };

export type GetItemForEditQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetItemForEditQuery = { __typename?: 'Query', getItem?: { __typename?: 'Item', name: string, text?: string | null, id: number, initialPrice: number, quantity: number, images?: Array<{ __typename?: 'Image', base64data: string, order: number, id: number } | null> | null } | null };

export type EditItemMutationVariables = Exact<{
  item: ItemInput;
}>;


export type EditItemMutation = { __typename?: 'Mutation', newItem?: { __typename?: 'Item', id: number } | null };

export type GetSingleItemShowQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetSingleItemShowQuery = { __typename?: 'Query', getItem?: { __typename?: 'Item', name: string, text?: string | null, id: number, initialPrice: number, quantity: number, images?: Array<{ __typename?: 'Image', base64data: string, order: number, id: number } | null> | null } | null };

export type GetItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemsQuery = { __typename?: 'Query', allItems: Array<{ __typename?: 'Item', name: string, text?: string | null, images?: Array<{ __typename?: 'Image', url: string } | null> | null }> };

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', signup?: { __typename?: 'Account', username: string } | null };


export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"expiresInDays"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserQuery, LoginUserQueryVariables>;
export const ValidateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ValidateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"expiresInDays"}}]}}]}}]}}]} as unknown as DocumentNode<ValidateUserQuery, ValidateUserQueryVariables>;
export const GetItemForEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItemForEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"initialPrice"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base64data"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetItemForEditQuery, GetItemForEditQueryVariables>;
export const EditItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"item"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"item"},"value":{"kind":"Variable","name":{"kind":"Name","value":"item"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<EditItemMutation, EditItemMutationVariables>;
export const GetSingleItemShowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSingleItemShow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"initialPrice"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base64data"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetSingleItemShowQuery, GetSingleItemShowQueryVariables>;
export const GetItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetItemsQuery, GetItemsQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;