/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as DoptApi from "../../../../../api";
import * as core from "../../../../../core";

export const IdentifyGroupRequestBody: core.serialization.Schema<
    serializers.IdentifyGroupRequestBody.Raw,
    DoptApi.IdentifyGroupRequestBody
> = core.serialization.object({
    identifier: core.serialization.string(),
    properties: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
});

export declare namespace IdentifyGroupRequestBody {
    interface Raw {
        identifier: string;
        properties: Record<string, unknown>;
    }
}
