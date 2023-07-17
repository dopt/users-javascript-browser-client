/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const IdentifySegmentRequestBodyIdentifySegmentRequestBody: core.serialization.ObjectSchema<
    serializers.IdentifySegmentRequestBodyIdentifySegmentRequestBody.Raw,
    DoptApi.IdentifySegmentRequestBodyIdentifySegmentRequestBody
> = core.serialization.object({
    type: core.serialization.stringLiteral("group"),
    groupId: core.serialization.string(),
    userId: core.serialization.string(),
    traits: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
});

export declare namespace IdentifySegmentRequestBodyIdentifySegmentRequestBody {
    interface Raw {
        type: "group";
        groupId: string;
        userId: string;
        traits: Record<string, unknown>;
    }
}