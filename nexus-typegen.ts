/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  LinkOrderByInput: { // input type
    createdAt?: NexusGenEnums['Sort'] | null; // Sort
    description?: NexusGenEnums['Sort'] | null; // Sort
    url?: NexusGenEnums['Sort'] | null; // Sort
  }
}

export interface NexusGenEnums {
  Sort: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AuthMutationResponse: { // root type
    code: string; // String!
    message: string; // String!
    nonce?: number | null; // Int
    success: boolean; // Boolean!
  }
  Feed: { // root type
    count: number; // Int!
    id?: string | null; // ID
    links: NexusGenRootTypes['Link'][]; // [Link!]!
  }
  Link: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: number; // Int!
    url: string; // String!
  }
  LoginMutationResponse: { // root type
    code: string; // String!
    message: string; // String!
    success: boolean; // Boolean!
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: {};
  Query: {};
  User: { // root type
    address: string; // String!
    bio?: string | null; // String
    coverImageUrl?: string | null; // String
    email?: string | null; // String
    id: number; // Int!
    name?: string | null; // String
    nonce?: number | null; // Int
    profileImageUrl?: string | null; // String
    token?: string | null; // String
    username?: string | null; // String
  }
  Vote: { // root type
    link: NexusGenRootTypes['Link']; // Link!
    user: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenInterfaces {
  MutationResponse: NexusGenRootTypes['AuthMutationResponse'] | NexusGenRootTypes['LoginMutationResponse'];
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AuthMutationResponse: { // field return type
    code: string; // String!
    message: string; // String!
    nonce: number | null; // Int
    success: boolean; // Boolean!
  }
  Feed: { // field return type
    count: number; // Int!
    id: string | null; // ID
    links: NexusGenRootTypes['Link'][]; // [Link!]!
  }
  Link: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: number; // Int!
    postedBy: NexusGenRootTypes['User'] | null; // User
    url: string; // String!
    voters: NexusGenRootTypes['User'][]; // [User!]!
  }
  LoginMutationResponse: { // field return type
    code: string; // String!
    message: string; // String!
    success: boolean; // Boolean!
    user: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: { // field return type
    auth: NexusGenRootTypes['AuthMutationResponse']; // AuthMutationResponse!
    deleteLink: NexusGenRootTypes['Link']; // Link!
    login: NexusGenRootTypes['LoginMutationResponse']; // LoginMutationResponse!
    post: NexusGenRootTypes['Link']; // Link!
    updateLink: NexusGenRootTypes['Link']; // Link!
    vote: NexusGenRootTypes['Vote'] | null; // Vote
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Feed']; // Feed!
    link: NexusGenRootTypes['Link'] | null; // Link
    user: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    address: string; // String!
    bio: string | null; // String
    coverImageUrl: string | null; // String
    email: string | null; // String
    id: number; // Int!
    links: NexusGenRootTypes['Link'][]; // [Link!]!
    name: string | null; // String
    nonce: number | null; // Int
    profileImageUrl: string | null; // String
    token: string | null; // String
    username: string | null; // String
    votes: NexusGenRootTypes['Link'][]; // [Link!]!
  }
  Vote: { // field return type
    link: NexusGenRootTypes['Link']; // Link!
    user: NexusGenRootTypes['User']; // User!
  }
  MutationResponse: { // field return type
    code: string; // String!
    message: string; // String!
    success: boolean; // Boolean!
  }
}

export interface NexusGenFieldTypeNames {
  AuthMutationResponse: { // field return type name
    code: 'String'
    message: 'String'
    nonce: 'Int'
    success: 'Boolean'
  }
  Feed: { // field return type name
    count: 'Int'
    id: 'ID'
    links: 'Link'
  }
  Link: { // field return type name
    createdAt: 'DateTime'
    description: 'String'
    id: 'Int'
    postedBy: 'User'
    url: 'String'
    voters: 'User'
  }
  LoginMutationResponse: { // field return type name
    code: 'String'
    message: 'String'
    success: 'Boolean'
    user: 'User'
  }
  Mutation: { // field return type name
    auth: 'AuthMutationResponse'
    deleteLink: 'Link'
    login: 'LoginMutationResponse'
    post: 'Link'
    updateLink: 'Link'
    vote: 'Vote'
  }
  Query: { // field return type name
    feed: 'Feed'
    link: 'Link'
    user: 'User'
  }
  User: { // field return type name
    address: 'String'
    bio: 'String'
    coverImageUrl: 'String'
    email: 'String'
    id: 'Int'
    links: 'Link'
    name: 'String'
    nonce: 'Int'
    profileImageUrl: 'String'
    token: 'String'
    username: 'String'
    votes: 'Link'
  }
  Vote: { // field return type name
    link: 'Link'
    user: 'User'
  }
  MutationResponse: { // field return type name
    code: 'String'
    message: 'String'
    success: 'Boolean'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    auth: { // args
      address: string; // String!
    }
    deleteLink: { // args
      id: number; // Int!
    }
    login: { // args
      address: string; // String!
      signature: string; // String!
    }
    post: { // args
      description: string; // String!
      url: string; // String!
    }
    updateLink: { // args
      description?: string | null; // String
      id: number; // Int!
      url?: string | null; // String
    }
    vote: { // args
      linkId: number; // Int!
    }
  }
  Query: {
    feed: { // args
      filter?: string | null; // String
      orderBy?: NexusGenInputs['LinkOrderByInput'][] | null; // [LinkOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
    }
    link: { // args
      id: number; // Int!
    }
    user: { // args
      address: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  MutationResponse: "AuthMutationResponse" | "LoginMutationResponse"
}

export interface NexusGenTypeInterfaces {
  AuthMutationResponse: "MutationResponse"
  LoginMutationResponse: "MutationResponse"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "MutationResponse";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}