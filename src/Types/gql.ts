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
    "\n      query GetSingleItem($id: Int!) {\n         getItem(id: $id) {\n            name\n            text\n            id\n            initialPrice\n            quantity\n            image {\n               url\n            }\n         }\n      }\n   ": types.GetSingleItemDocument,
    "\n      mutation newItSSSem($item: ItemInput!) {\n         newItem(item: $item) {\n            name\n         }\n      }\n   ": types.NewItSsSemDocument,
    "\n      query GetSingleIteSm($id: Int!) {\n         getItem(id: $id) {\n            name\n            text\n         }\n      }\n   ": types.GetSingleIteSmDocument,
    "\n   query GetItems {\n      allItems {\n         name\n         text\n         image {\n            url\n         }\n      }\n   }\n": types.GetItemsDocument,
    "\n      mutation newItem($item: ItemInput!) {\n         newItem(item: $item) {\n            id\n         }\n      }\n   ": types.NewItemDocument,
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
export function graphql(source: "\n      query GetSingleItem($id: Int!) {\n         getItem(id: $id) {\n            name\n            text\n            id\n            initialPrice\n            quantity\n            image {\n               url\n            }\n         }\n      }\n   "): (typeof documents)["\n      query GetSingleItem($id: Int!) {\n         getItem(id: $id) {\n            name\n            text\n            id\n            initialPrice\n            quantity\n            image {\n               url\n            }\n         }\n      }\n   "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation newItSSSem($item: ItemInput!) {\n         newItem(item: $item) {\n            name\n         }\n      }\n   "): (typeof documents)["\n      mutation newItSSSem($item: ItemInput!) {\n         newItem(item: $item) {\n            name\n         }\n      }\n   "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetSingleIteSm($id: Int!) {\n         getItem(id: $id) {\n            name\n            text\n         }\n      }\n   "): (typeof documents)["\n      query GetSingleIteSm($id: Int!) {\n         getItem(id: $id) {\n            name\n            text\n         }\n      }\n   "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query GetItems {\n      allItems {\n         name\n         text\n         image {\n            url\n         }\n      }\n   }\n"): (typeof documents)["\n   query GetItems {\n      allItems {\n         name\n         text\n         image {\n            url\n         }\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation newItem($item: ItemInput!) {\n         newItem(item: $item) {\n            id\n         }\n      }\n   "): (typeof documents)["\n      mutation newItem($item: ItemInput!) {\n         newItem(item: $item) {\n            id\n         }\n      }\n   "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;