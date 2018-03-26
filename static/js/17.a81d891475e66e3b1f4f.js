webpackJsonp([17],{AbKj:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("markdown-wrapper",[a("h1",{attrs:{id:"multiselect"}},[s._v("MultiSelect "),a("a",{staticClass:"header-anchor",attrs:{href:"#multiselect","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("h2",{attrs:{id:"example"}},[s._v("Example "),a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("p",[s._v("Use "),a("code",{pre:!0},[s._v("v-model")]),s._v(" to bind selected values, and "),a("code",{pre:!0},[s._v("options")]),s._v(" as select options.")]),s._v(" "),a("multi-select-example",{ref:"multi-select-example"}),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("multi-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selected"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v("/>")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("selected")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option1'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option2'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option3'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option4'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option5'")]),s._v("}\n        ]\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- multi-select-example.vue --\x3e")]),s._v("\n")])]),s._v(" "),a("h2",{attrs:{id:"multiple-limit"}},[s._v("Multiple Limit "),a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-limit","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("p",[s._v("Use "),a("code",{pre:!0},[s._v("limit")]),s._v(" to restrict the maximum number of options user can select, no limit when set to "),a("code",{pre:!0},[s._v("0")]),s._v(".")]),s._v(" "),a("multi-select-limit",{ref:"multi-select-limit"}),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("multi-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selected"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":limit")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v("/>")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("selected")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option1'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option2'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option3'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option4'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option5'")]),s._v("}\n        ]\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- multi-select-limit.vue --\x3e")]),s._v("\n")])]),s._v(" "),a("h2",{attrs:{id:"optional-sizes"}},[s._v("Optional Sizes "),a("a",{staticClass:"header-anchor",attrs:{href:"#optional-sizes","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("p",[s._v("Optional sizes "),a("code",{pre:!0},[s._v("sm")]),s._v(" and "),a("code",{pre:!0},[s._v("lg")]),s._v(" are supported. You can also add "),a("code",{pre:!0},[s._v("block")]),s._v(" prop to quickly apply "),a("code",{pre:!0},[s._v("width: 100%")]),s._v(" style to the component.")]),s._v(" "),a("multi-select-sizes",{ref:"multi-select-sizes"}),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("multi-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selected"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"sm"')]),s._v("/>")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("multi-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selected"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v("/>")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("multi-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selected"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"lg"')]),s._v("/>")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("multi-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selected"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"lg"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("block")]),s._v("/>")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("selected")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option1'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option2'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option3'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option4'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option5'")]),s._v("}\n        ]\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- multi-select-sizes.vue --\x3e")]),s._v("\n")])]),s._v(" "),a("h2",{attrs:{id:"disabled-options"}},[s._v("Disabled options "),a("a",{staticClass:"header-anchor",attrs:{href:"#disabled-options","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("p",[s._v("Add "),a("code",{pre:!0},[s._v("disabled: true")]),s._v(" to an option to disable it.")]),s._v(" "),a("multi-select-disabled-options",{ref:"multi-select-disabled-options"}),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("multi-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selected"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v("/>")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("selected")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option1'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option2'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option3'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option4'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option5'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("}\n        ]\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- multi-select-disabled-options.vue --\x3e")]),s._v("\n")])]),s._v(" "),a("h2",{attrs:{id:"disabled-select"}},[s._v("Disabled select "),a("a",{staticClass:"header-anchor",attrs:{href:"#disabled-select","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("multi-select-disabled-select",{ref:"multi-select-disabled-select"}),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("multi-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selected"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v("/>")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("selected")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option1'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option2'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option3'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option4'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option5'")]),s._v("}\n        ]\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- multi-select-disabled-select.vue --\x3e")]),s._v("\n")])]),s._v(" "),a("h2",{attrs:{id:"collapse-selected"}},[s._v("Collapse selected "),a("a",{staticClass:"header-anchor",attrs:{href:"#collapse-selected","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("p",[s._v("Collapse multiple selected items into a text by using "),a("code",{pre:!0},[s._v("collapse-selected")]),s._v(" prop.")]),s._v(" "),a("multi-select-collapse-selected",{ref:"multi-select-collapse-selected"}),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("multi-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selected"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("collapse-selected")]),s._v("/>")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("selected")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option1'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option2'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option3'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option4'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option5'")]),s._v("}\n        ]\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- multi-select-collapse-selected.vue --\x3e")]),s._v("\n")])]),s._v(" "),a("h2",{attrs:{id:"filterable"}},[s._v("Filterable "),a("a",{staticClass:"header-anchor",attrs:{href:"#filterable","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("p",[s._v("Add "),a("code",{pre:!0},[s._v("filterable")]),s._v(" to append filter input before options.")]),s._v(" "),a("p",[s._v("By default, options are filtered by item value and label (case ignored), use a custom "),a("code",{pre:!0},[s._v("filter-function")]),s._v(" to override it if needed.")]),s._v(" "),a("multi-select-filterable",{ref:"multi-select-filterable"}),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("multi-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selected"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("filterable")]),s._v("/>")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("selected")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option1'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option2'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option3'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option4'")]),s._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Option5'")]),s._v("}\n        ]\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- multi-select-filterable.vue --\x3e")]),s._v("\n")])]),s._v(" "),a("h1",{attrs:{id:"api-reference"}},[s._v("API Reference "),a("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("h2",{attrs:{id:"multiselect-2"}},[a("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/master/src/components/select/MultiSelect.vue"}},[s._v("MultiSelect")]),s._v(" "),a("a",{staticClass:"header-anchor",attrs:{href:"#multiselect-2","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("h3",{attrs:{id:"props"}},[s._v("Props "),a("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-hover"},[a("thead",[a("tr",[a("th",[s._v("Name")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Default")]),s._v(" "),a("th",[s._v("Required")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[s._v("v-model")])]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("✔")]),s._v(" "),a("td",[s._v("The selected values.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("options")])]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("✔")]),s._v(" "),a("td",[s._v("The select options.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("label-key")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("label")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Identity key name for label.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("value-key")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("value")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Identity key name for value.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("limit")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("0")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Maximum number of options user can select, no limit when set to "),a("code",{pre:!0},[s._v("0")]),s._v(".")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("size")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Optional sizes, supported: "),a("code",{pre:!0},[s._v("sm")]),s._v(" / "),a("code",{pre:!0},[s._v("lg")]),s._v(".")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("block")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Apply block level style.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("placeholder")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("Select...")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("The default text displayed when no options are selected.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("split")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v(",")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("The options display spliter.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("filterable")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Append filter input before options (default is filter by item value and label, case ignored).")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("filter-placeholder")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("Search...")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("The default text displayed in filter input.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("filter-auto-focus")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("true")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Auto focus on filter input.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("filter-function")])]),s._v(" "),a("td",[s._v("Function")]),s._v(" "),a("td"),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Custom filter function, with one param as input string, and returns the filtered array.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("disabled")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Disable the select component.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("collapse-selected")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Collapse multiple selected items into a text.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("append-to-body")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Append the dropdown to "),a("code",{pre:!0},[s._v("body")]),s._v(".")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("selected-icon")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("glyphicon glyphicon-ok")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Icon displayed in option while selected.")])])])])]),a("h3",{attrs:{id:"events"}},[s._v("Events "),a("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-hover"},[a("thead",[a("tr",[a("th",[s._v("Name")]),s._v(" "),a("th",[s._v("Params")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[s._v("change")])]),s._v(" "),a("td",[s._v("value")]),s._v(" "),a("td",[s._v("Triggers when the selected value changes.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("visible-change")])]),s._v(" "),a("td",[s._v("the visible status (true / false)")]),s._v(" "),a("td",[s._v("Triggers when the dropdown toggles.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("limit-exceed")])]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Triggers when the selected value length exceeded limit.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("focus")])]),s._v(" "),a("td",[s._v("event")]),s._v(" "),a("td",[s._v("Triggers when input focuses.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("blur")])]),s._v(" "),a("td",[s._v("event")]),s._v(" "),a("td",[s._v("Triggers when input blurs.")])])])])])],1)},staticRenderFns:[]},e=a("VU/8")({components:{"multi-select-example":{template:'<div class="markdown-live-example">\n  <multi-select v-model="selected" :options="options"/>\n</div>',data:function(){return{selected:[],options:[{value:1,label:"Option1"},{value:2,label:"Option2"},{value:3,label:"Option3"},{value:4,label:"Option4"},{value:5,label:"Option5"}]}}},"multi-select-limit":{template:'<div class="markdown-live-example">\n  <multi-select v-model="selected" :options="options" :limit="3"/>\n</div>',data:function(){return{selected:[],options:[{value:1,label:"Option1"},{value:2,label:"Option2"},{value:3,label:"Option3"},{value:4,label:"Option4"},{value:5,label:"Option5"}]}}},"multi-select-sizes":{template:'<div class="markdown-live-example">\n  <section>\n    <div>\n      <multi-select v-model="selected" :options="options" size="sm"/>\n    </div>\n    <br/>\n    <div>\n      <multi-select v-model="selected" :options="options"/>\n    </div>\n    <br/>\n    <div>\n      <multi-select v-model="selected" :options="options" size="lg"/>\n    </div>\n    <br/>\n    <div>\n      <multi-select v-model="selected" :options="options" size="lg" block/>\n    </div>\n  </section>\n</div>',data:function(){return{selected:[],options:[{value:1,label:"Option1"},{value:2,label:"Option2"},{value:3,label:"Option3"},{value:4,label:"Option4"},{value:5,label:"Option5"}]}}},"multi-select-disabled-options":{template:'<div class="markdown-live-example">\n  <multi-select v-model="selected" :options="options"/>\n</div>',data:function(){return{selected:[],options:[{value:1,label:"Option1"},{value:2,label:"Option2"},{value:3,label:"Option3",disabled:!0},{value:4,label:"Option4"},{value:5,label:"Option5",disabled:!0}]}}},"multi-select-disabled-select":{template:'<div class="markdown-live-example">\n  <multi-select v-model="selected" :options="options" disabled/>\n</div>',data:function(){return{selected:[],options:[{value:1,label:"Option1"},{value:2,label:"Option2"},{value:3,label:"Option3"},{value:4,label:"Option4"},{value:5,label:"Option5"}]}}},"multi-select-collapse-selected":{template:'<div class="markdown-live-example">\n  <multi-select v-model="selected" :options="options" collapse-selected/>\n</div>',data:function(){return{selected:[],options:[{value:1,label:"Option1"},{value:2,label:"Option2"},{value:3,label:"Option3"},{value:4,label:"Option4"},{value:5,label:"Option5"}]}}},"multi-select-filterable":{template:'<div class="markdown-live-example">\n  <multi-select v-model="selected" :options="options" filterable/>\n</div>',data:function(){return{selected:[],options:[{value:1,label:"Option1"},{value:2,label:"Option2"},{value:3,label:"Option3"},{value:4,label:"Option4"},{value:5,label:"Option5"}]}}}}},l,!1,null,null,null);t.default=e.exports}});
//# sourceMappingURL=17.a81d891475e66e3b1f4f.js.map