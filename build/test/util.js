"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildmodel_1 = require("../src/compile/buildmodel");
var concat_1 = require("../src/compile/concat");
var facet_1 = require("../src/compile/facet");
var layer_1 = require("../src/compile/layer");
var repeat_1 = require("../src/compile/repeat");
var unit_1 = require("../src/compile/unit");
var config_1 = require("../src/config");
var spec_1 = require("../src/spec");
var spec_2 = require("../src/spec");
var toplevelprops_1 = require("../src/toplevelprops");
function parseModel(inputSpec) {
    var config = config_1.initConfig(inputSpec.config);
    var spec = spec_1.normalize(inputSpec, config);
    var autosize = toplevelprops_1.normalizeAutoSize(inputSpec.autosize, config.autosize, spec_2.isLayerSpec(spec) || spec_2.isUnitSpec(spec));
    return buildmodel_1.buildModel(spec, null, '', undefined, undefined, config, autosize.type === 'fit');
}
exports.parseModel = parseModel;
function parseModelWithScale(inputSpec) {
    var model = parseModel(inputSpec);
    model.parseScale();
    return model;
}
exports.parseModelWithScale = parseModelWithScale;
function parseUnitModel(spec) {
    return new unit_1.UnitModel(spec, null, '', undefined, undefined, config_1.initConfig(spec.config), toplevelprops_1.normalizeAutoSize(spec.autosize, spec.config ? spec.config.autosize : undefined, true).type === 'fit');
}
exports.parseUnitModel = parseUnitModel;
function parseUnitModelWithScale(spec) {
    var model = parseUnitModel(spec);
    model.parseScale();
    return model;
}
exports.parseUnitModelWithScale = parseUnitModelWithScale;
function parseUnitModelWithScaleAndLayoutSize(spec) {
    var model = parseUnitModelWithScale(spec);
    model.parseLayoutSize();
    return model;
}
exports.parseUnitModelWithScaleAndLayoutSize = parseUnitModelWithScaleAndLayoutSize;
function parseLayerModel(spec) {
    return new layer_1.LayerModel(spec, null, '', undefined, undefined, config_1.initConfig(spec.config), toplevelprops_1.normalizeAutoSize(spec.autosize, spec.config ? spec.config.autosize : undefined, true).type === 'fit');
}
exports.parseLayerModel = parseLayerModel;
function parseFacetModel(spec) {
    return new facet_1.FacetModel(spec, null, '', undefined, config_1.initConfig(spec.config));
}
exports.parseFacetModel = parseFacetModel;
function parseFacetModelWithScale(spec) {
    var model = parseFacetModel(spec);
    model.parseScale();
    return model;
}
exports.parseFacetModelWithScale = parseFacetModelWithScale;
function parseRepeatModel(spec) {
    return new repeat_1.RepeatModel(spec, null, '', undefined, config_1.initConfig(spec.config));
}
exports.parseRepeatModel = parseRepeatModel;
function parseConcatModel(spec) {
    return new concat_1.ConcatModel(spec, null, '', undefined, config_1.initConfig(spec.config));
}
exports.parseConcatModel = parseConcatModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdEQUFxRDtBQUNyRCxnREFBa0Q7QUFDbEQsOENBQWdEO0FBQ2hELDhDQUFnRDtBQUVoRCxnREFBa0Q7QUFDbEQsNENBQThDO0FBQzlDLHdDQUF5QztBQUN6QyxvQ0FTcUI7QUFDckIsb0NBQW9EO0FBQ3BELHNEQUF1RDtBQUV2RCxvQkFBMkIsU0FBdUI7SUFDaEQsSUFBTSxNQUFNLEdBQUcsbUJBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsSUFBTSxJQUFJLEdBQUcsZ0JBQVMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUMsSUFBTSxRQUFRLEdBQUcsaUNBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLGtCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9HLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUM7QUFDM0YsQ0FBQztBQUxELGdDQUtDO0FBRUQsNkJBQW9DLFNBQXVCO0lBQ3pELElBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNmLENBQUM7QUFKRCxrREFJQztBQUVELHdCQUErQixJQUFrQztJQUMvRCxNQUFNLENBQUMsSUFBSSxnQkFBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsbUJBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsaUNBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQztBQUM3TCxDQUFDO0FBRkQsd0NBRUM7QUFFRCxpQ0FBd0MsSUFBa0M7SUFDeEUsSUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUpELDBEQUlDO0FBRUQsOENBQXFELElBQWtDO0lBQ3JGLElBQU0sS0FBSyxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUpELG9GQUlDO0FBR0QseUJBQWdDLElBQW1DO0lBQ2pFLE1BQU0sQ0FBQyxJQUFJLGtCQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxtQkFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxpQ0FBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQzlMLENBQUM7QUFGRCwwQ0FFQztBQUVELHlCQUFnQyxJQUFtQztJQUNqRSxNQUFNLENBQUMsSUFBSSxrQkFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxtQkFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzVFLENBQUM7QUFGRCwwQ0FFQztBQUVELGtDQUF5QyxJQUFtQztJQUMxRSxJQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDZixDQUFDO0FBSkQsNERBSUM7QUFFRCwwQkFBaUMsSUFBb0M7SUFDbkUsTUFBTSxDQUFDLElBQUksb0JBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsbUJBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3RSxDQUFDO0FBRkQsNENBRUM7QUFFRCwwQkFBaUMsSUFBb0M7SUFDbkUsTUFBTSxDQUFDLElBQUksb0JBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsbUJBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3RSxDQUFDO0FBRkQsNENBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2J1aWxkTW9kZWx9IGZyb20gJy4uL3NyYy9jb21waWxlL2J1aWxkbW9kZWwnO1xuaW1wb3J0IHtDb25jYXRNb2RlbH0gZnJvbSAnLi4vc3JjL2NvbXBpbGUvY29uY2F0JztcbmltcG9ydCB7RmFjZXRNb2RlbH0gZnJvbSAnLi4vc3JjL2NvbXBpbGUvZmFjZXQnO1xuaW1wb3J0IHtMYXllck1vZGVsfSBmcm9tICcuLi9zcmMvY29tcGlsZS9sYXllcic7XG5pbXBvcnQge01vZGVsfSBmcm9tICcuLi9zcmMvY29tcGlsZS9tb2RlbCc7XG5pbXBvcnQge1JlcGVhdE1vZGVsfSBmcm9tICcuLi9zcmMvY29tcGlsZS9yZXBlYXQnO1xuaW1wb3J0IHtVbml0TW9kZWx9IGZyb20gJy4uL3NyYy9jb21waWxlL3VuaXQnO1xuaW1wb3J0IHtpbml0Q29uZmlnfSBmcm9tICcuLi9zcmMvY29uZmlnJztcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZSxcbiAgTm9ybWFsaXplZENvbmNhdFNwZWMsXG4gIE5vcm1hbGl6ZWRGYWNldFNwZWMsXG4gIE5vcm1hbGl6ZWRMYXllclNwZWMsXG4gIE5vcm1hbGl6ZWRSZXBlYXRTcGVjLFxuICBOb3JtYWxpemVkVW5pdFNwZWMsXG4gIFRvcExldmVsLFxuICBUb3BMZXZlbFNwZWMsXG59IGZyb20gJy4uL3NyYy9zcGVjJztcbmltcG9ydCB7aXNMYXllclNwZWMsIGlzVW5pdFNwZWN9IGZyb20gJy4uL3NyYy9zcGVjJztcbmltcG9ydCB7bm9ybWFsaXplQXV0b1NpemV9IGZyb20gJy4uL3NyYy90b3BsZXZlbHByb3BzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTW9kZWwoaW5wdXRTcGVjOiBUb3BMZXZlbFNwZWMpOiBNb2RlbCB7XG4gIGNvbnN0IGNvbmZpZyA9IGluaXRDb25maWcoaW5wdXRTcGVjLmNvbmZpZyk7XG4gIGNvbnN0IHNwZWMgPSBub3JtYWxpemUoaW5wdXRTcGVjLCBjb25maWcpO1xuICBjb25zdCBhdXRvc2l6ZSA9IG5vcm1hbGl6ZUF1dG9TaXplKGlucHV0U3BlYy5hdXRvc2l6ZSwgY29uZmlnLmF1dG9zaXplLCBpc0xheWVyU3BlYyhzcGVjKSB8fCBpc1VuaXRTcGVjKHNwZWMpKTtcbiAgcmV0dXJuIGJ1aWxkTW9kZWwoc3BlYywgbnVsbCwgJycsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb25maWcsIGF1dG9zaXplLnR5cGUgPT09ICdmaXQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTW9kZWxXaXRoU2NhbGUoaW5wdXRTcGVjOiBUb3BMZXZlbFNwZWMpOiBNb2RlbCB7XG4gIGNvbnN0IG1vZGVsID0gcGFyc2VNb2RlbChpbnB1dFNwZWMpO1xuICBtb2RlbC5wYXJzZVNjYWxlKCk7XG4gIHJldHVybiBtb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVW5pdE1vZGVsKHNwZWM6IFRvcExldmVsPE5vcm1hbGl6ZWRVbml0U3BlYz4pIHtcbiAgcmV0dXJuIG5ldyBVbml0TW9kZWwoc3BlYywgbnVsbCwgJycsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBpbml0Q29uZmlnKHNwZWMuY29uZmlnKSwgbm9ybWFsaXplQXV0b1NpemUoc3BlYy5hdXRvc2l6ZSwgc3BlYy5jb25maWcgPyBzcGVjLmNvbmZpZy5hdXRvc2l6ZSA6IHVuZGVmaW5lZCwgdHJ1ZSkudHlwZSA9PT0gJ2ZpdCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVbml0TW9kZWxXaXRoU2NhbGUoc3BlYzogVG9wTGV2ZWw8Tm9ybWFsaXplZFVuaXRTcGVjPikge1xuICBjb25zdCBtb2RlbCA9IHBhcnNlVW5pdE1vZGVsKHNwZWMpO1xuICBtb2RlbC5wYXJzZVNjYWxlKCk7XG4gIHJldHVybiBtb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVW5pdE1vZGVsV2l0aFNjYWxlQW5kTGF5b3V0U2l6ZShzcGVjOiBUb3BMZXZlbDxOb3JtYWxpemVkVW5pdFNwZWM+KSB7XG4gIGNvbnN0IG1vZGVsID0gcGFyc2VVbml0TW9kZWxXaXRoU2NhbGUoc3BlYyk7XG4gIG1vZGVsLnBhcnNlTGF5b3V0U2l6ZSgpO1xuICByZXR1cm4gbW9kZWw7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGF5ZXJNb2RlbChzcGVjOiBUb3BMZXZlbDxOb3JtYWxpemVkTGF5ZXJTcGVjPikge1xuICByZXR1cm4gbmV3IExheWVyTW9kZWwoc3BlYywgbnVsbCwgJycsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBpbml0Q29uZmlnKHNwZWMuY29uZmlnKSwgbm9ybWFsaXplQXV0b1NpemUoc3BlYy5hdXRvc2l6ZSwgc3BlYy5jb25maWcgPyBzcGVjLmNvbmZpZy5hdXRvc2l6ZSA6IHVuZGVmaW5lZCwgdHJ1ZSkudHlwZSA9PT0gJ2ZpdCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGYWNldE1vZGVsKHNwZWM6IFRvcExldmVsPE5vcm1hbGl6ZWRGYWNldFNwZWM+KSB7XG4gIHJldHVybiBuZXcgRmFjZXRNb2RlbChzcGVjLCBudWxsLCAnJywgdW5kZWZpbmVkLCBpbml0Q29uZmlnKHNwZWMuY29uZmlnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZhY2V0TW9kZWxXaXRoU2NhbGUoc3BlYzogVG9wTGV2ZWw8Tm9ybWFsaXplZEZhY2V0U3BlYz4pIHtcbiAgY29uc3QgbW9kZWwgPSBwYXJzZUZhY2V0TW9kZWwoc3BlYyk7XG4gIG1vZGVsLnBhcnNlU2NhbGUoKTtcbiAgcmV0dXJuIG1vZGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZXBlYXRNb2RlbChzcGVjOiBUb3BMZXZlbDxOb3JtYWxpemVkUmVwZWF0U3BlYz4pIHtcbiAgcmV0dXJuIG5ldyBSZXBlYXRNb2RlbChzcGVjLCBudWxsLCAnJywgdW5kZWZpbmVkLCBpbml0Q29uZmlnKHNwZWMuY29uZmlnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbmNhdE1vZGVsKHNwZWM6IFRvcExldmVsPE5vcm1hbGl6ZWRDb25jYXRTcGVjPikge1xuICByZXR1cm4gbmV3IENvbmNhdE1vZGVsKHNwZWMsIG51bGwsICcnLCB1bmRlZmluZWQsIGluaXRDb25maWcoc3BlYy5jb25maWcpKTtcbn1cbiJdfQ==