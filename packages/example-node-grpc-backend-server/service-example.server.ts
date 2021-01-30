// @generated by protobuf-ts 2.0.0-alpha.9 with parameters server_generic,client_none,generate_dependencies,optimize_code_size
// @generated from protobuf file "service-example.proto" (package "spec", syntax proto3)
// tslint:disable
import { RpcOutputStream } from "@protobuf-ts/runtime-rpc";
import { RpcInputStream } from "@protobuf-ts/runtime-rpc";
import { ServerCallContext } from "@protobuf-ts/runtime-rpc";
import { ExampleResponse } from "./service-example";
import { ExampleRequest } from "./service-example";
/**
 * @generated from protobuf service spec.ExampleService
 */
export interface IExampleService {
    /**
     * @generated from protobuf rpc: Unary(spec.ExampleRequest) returns (spec.ExampleResponse);
     */
    unary(request: ExampleRequest, context: ServerCallContext): Promise<ExampleResponse>;
    /**
     * @generated from protobuf rpc: ServerStream(spec.ExampleRequest) returns (stream spec.ExampleResponse);
     */
    serverStream(request: ExampleRequest, responses: RpcInputStream<ExampleResponse>, context: ServerCallContext): Promise<void>;
    /**
     * @generated from protobuf rpc: ClientStream(stream spec.ExampleRequest) returns (spec.ExampleResponse);
     */
    clientStream(requests: RpcOutputStream<ExampleRequest>, context: ServerCallContext): Promise<ExampleResponse>;
    /**
     * @generated from protobuf rpc: Bidi(stream spec.ExampleRequest) returns (stream spec.ExampleResponse);
     */
    bidi(requests: RpcOutputStream<ExampleRequest>, responses: RpcInputStream<ExampleResponse>, context: ServerCallContext): Promise<void>;
}