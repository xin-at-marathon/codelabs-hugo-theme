import "./index.scss"

import $ from 'jquery'
import {basicSetup, EditorView} from "codemirror"
import {StreamLanguage} from "@codemirror/language"
import {java} from "@codemirror/legacy-modes/mode/clike"

$(function () {
    fetch('/cookbook/code-template/App.java')
        .then(response => response.text())
        .then((data) => {
            var editor = new EditorView({
                doc: data,
                extensions: [basicSetup, StreamLanguage.define(java)],
                parent: $("#editor")[0]
              })

            $("#btnSubmit").on("click", () => {
                var code = editor.state.doc.toString()
                console.log(code)
            })
        })
})
