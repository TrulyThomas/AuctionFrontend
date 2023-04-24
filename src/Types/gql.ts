/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n      query LoginUser($email: String!, $password: String!) {\n         login(email: $email, password: $password) {\n            username\n         }\n      }\n   ": types.LoginUserDocument,
    "\n      query GetItemForEdit($id: Int!) {\n         getItem(id: $id) {\n            name\n            text\n            id\n            initialPrice\n            quantity\n            images {\n               base64data\n               order\n               id\n            }\n         }\n      }\n   ": types.GetItemForEditDocument,
    "\n      mutation editItem($item: ItemInput!) {\n         newItem(item: $item) {\n            id\n         }\n      }\n   ": types.EditItemDocument,
    "\n      query GetSingleItemShow($id: Int!) {\n         getItem(id: $id) {\n            name\n            text\n            id\n            initialPrice\n            quantity\n            images {\n               base64data\n               order\n               id\n            }\n         }\n      }\n   ": types.GetSingleItemShowDocument,
    "\n   query GetItems {\n      allItems {\n         name\n         text\n         images {\n            url\n         }\n      }\n   }\n": types.GetItemsDocument,
    "\n      mutation CreateUser($username: String!, $password: String!, $email: String!) {\n         signup(email: $email, username: $username, password: $password) {\n            username\n         }\n      }\n   ": types.CreateUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query LoginUser($email: String!, $password: String!) {\n         login(email: $email, password: $password) {\n            username\n         }\n      }\n   "): (typeof documents)["\n      query LoginUser($email: String!, $password: String!) {\n         login(email: $email, password: $password) {\n            username\n         }\n      }\n   "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetItemForEdit($id: Int!) {\n         getItem(id: $id) {\n            name\n            text\n            id\n            initialPrice\n            quantity\n            images {\n               base64data\n               order\n               id\n            }\n         }\n      }\n   "): (typeof documents)["\n      query GetItemForEdit($id: Int!) {\n         getItem(id: $id) {\n            name\n            text\n            id\n            initialPrice\n            quantity\n            images {\n               base64data\n               order\n               id\n            }\n         }\n      }\n   "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation editItem($item: ItemInput!) {\n         newItem(item: $item) {\n            id\n         }\n      }\n   "): (typeof documents)["\n      mutation editItem($item: ItemInput!) {\n         newItem(item: $item) {\n            id\n         }\n      }\n   "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetSingleItemShow($id: Int!) {\n         getItem(id: $id) {\n            name\n            text\n            id\n            initialPrice\n            quantity\n            images {\n               base64data\n               order\n               id\n            }\n         }\n      }\n   "): (typeof documents)["\n      query GetSingleItemShow($id: Int!) {\n         getItem(id: $id) {\n            name\n            text\n            id\n            initialPrice\n            quantity\n            images {\n               base64data\n               order\n               id\n            }\n         }\n      }\n   "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query GetItems {\n      allItems {\n         name\n         text\n         images {\n            url\n         }\n      }\n   }\n"): (typeof documents)["\n   query GetItems {\n      allItems {\n         name\n         text\n         images {\n            url\n         }\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation CreateUser($username: String!, $password: String!, $email: String!) {\n         signup(email: $email, username: $username, password: $password) {\n            username\n         }\n      }\n   "): (typeof documents)["\n      mutation CreateUser($username: String!, $password: String!, $email: String!) {\n         signup(email: $email, username: $username, password: $password) {\n            username\n         }\n      }\n   "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;