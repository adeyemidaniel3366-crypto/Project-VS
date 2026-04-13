let editor;

require.config({
 paths:{
  'vs':'https://unpkg.com/monaco-editor@0.45.0/min/vs'
 }
});

// Register custom snippets for HTML, CSS, and JavaScript
function registerSnippets() {
    // HTML Snippets
    monaco.languages.registerCompletionItemProvider('html', {
        provideCompletionItems: function(model, position) {
            const suggestions = [
                {
                    label: 'html5',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        '<!DOCTYPE html>',
                        '<html lang="en">',
                        '<head>',
                        '\t<meta charset="UTF-8">',
                        '\t<meta name="viewport" content="width=device-width, initial-scale=1.0">',
                        '\t<title>${1:Document}</title>',
                        '</head>',
                        '<body>',
                        '\t${2:<!-- Content here -->}',
                        '</body>',
                        '</html>'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML5 boilerplate'
                },
                {
                    label: 'div',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<div class="${1:class}">${2:content}</div>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML div element'
                },
                {
                    label: 'p',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<p>${1:text}</p>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML paragraph element'
                },
                {
                    label: 'a',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<a href="${1:#}" target="${2:_blank}">${3:link text}</a>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML anchor element'
                },
                {
                    label: 'img',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<img src="${1:image.jpg}" alt="${2:description}" width="${3:300}" height="${4:200}">',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML image element'
                },
                {
                    label: 'input',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<input type="${1:text}" name="${2:name}" id="${3:id}" placeholder="${4:placeholder}">',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML input element'
                },
                {
                    label: 'button',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<button type="${1:button}" onclick="${2:handleClick()}">${3:Button}</button>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML button element'
                },
                {
                    label: 'ul',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        '<ul>',
                        '\t<li>${1:item 1}</li>',
                        '\t<li>${2:item 2}</li>',
                        '\t<li>${3:item 3}</li>',
                        '</ul>'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML unordered list'
                },
                {
                    label: 'ol',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        '<ol>',
                        '\t<li>${1:item 1}</li>',
                        '\t<li>${2:item 2}</li>',
                        '\t<li>${3:item 3}</li>',
                        '</ol>'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML ordered list'
                },
                {
                    label: 'table',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        '<table>',
                        '\t<thead>',
                        '\t\t<tr>',
                        '\t\t\t<th>${1:Header 1}</th>',
                        '\t\t\t<th>${2:Header 2}</th>',
                        '\t\t</tr>',
                        '\t</thead>',
                        '\t<tbody>',
                        '\t\t<tr>',
                        '\t\t\t<td>${3:Data 1}</td>',
                        '\t\t\t<td>${4:Data 2}</td>',
                        '\t\t</tr>',
                        '\t</tbody>',
                        '</table>'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML table'
                },
                {
                    label: 'form',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        '<form action="${1:/submit}" method="${2:post}">',
                        '\t${3:<!-- Form fields here -->}',
                        '\t<button type="submit">${4:Submit}</button>',
                        '</form>'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML form'
                },
                {
                    label: 'script',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<script src="${1:script.js}"></script>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML script tag'
                },
                {
                    label: 'link',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<link rel="${1:stylesheet}" href="${2:style.css}">',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML link tag'
                },
                {
                    label: 'h1',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<h1>${1:Heading}</h1>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML h1 heading'
                },
                {
                    label: 'h2',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<h2>${1:Heading}</h2>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML h2 heading'
                },
                {
                    label: 'h3',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<h3>${1:Heading}</h3>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML h3 heading'
                },
                {
                    label: 'span',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<span class="${1:class}">${2:text}</span>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML span element'
                },
                {
                    label: 'section',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<section class="${1:class}" id="${2:id}">\n\t${3:content}\n</section>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML section element'
                },
                {
                    label: 'article',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<article class="${1:class}">\n\t${2:content}\n</article>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML article element'
                },
                {
                    label: 'header',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<header class="${1:class}">\n\t${2:content}\n</header>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML header element'
                },
                {
                    label: 'footer',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<footer class="${1:class}">\n\t${2:content}\n</footer>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML footer element'
                },
                {
                    label: 'nav',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<nav class="${1:class}">\n\t${2:<!-- Navigation links -->}\n</nav>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML navigation element'
                },
                {
                    label: 'aside',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<aside class="${1:class}">\n\t${2:content}\n</aside>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML aside element'
                },
                {
                    label: 'main',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<main class="${1:class}">\n\t${2:content}\n</main>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML main element'
                },
                {
                    label: 'textarea',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<textarea name="${1:name}" id="${2:id}" rows="${3:4}" cols="${4:50}" placeholder="${5:Enter text}"></textarea>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML textarea element'
                },
                {
                    label: 'select',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        '<select name="${1:name}" id="${2:id}">',
                        '\t<option value="${3:value1}">${4:Option 1}</option>',
                        '\t<option value="${5:value2}">${6:Option 2}</option>',
                        '</select>'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML select element'
                },
                {
                    label: 'label',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<label for="${1:id}">${2:Label text}</label>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML label element'
                },
                {
                    label: 'iframe',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<iframe src="${1:url}" width="${2:560}" height="${3:315}" frameborder="${4:0}" allowfullscreen></iframe>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML iframe element'
                },
                {
                    label: 'video',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<video width="${1:320}" height="${2:240}" controls>\n\t<source src="${3:movie.mp4}" type="${4:video/mp4}">\n\t${5:Your browser does not support the video tag.}\n</video>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML video element'
                },
                {
                    label: 'audio',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<audio controls>\n\t<source src="${1:audio.mp3}" type="${2:audio/mpeg}">\n\t${3:Your browser does not support the audio element.}\n</audio>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML audio element'
                },
                {
                    label: 'canvas',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<canvas id="${1:canvas}" width="${2:300}" height="${3:150}"></canvas>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML canvas element'
                },
                {
                    label: 'svg',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<svg width="${1:100}" height="${2:100}">\n\t${3:<!-- SVG content -->}\n</svg>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML SVG element'
                },
            ];
            return { suggestions: suggestions };
        }
    });

    // CSS Snippets
    monaco.languages.registerCompletionItemProvider('css', {
        provideCompletionItems: function(model, position) {
            const suggestions = [
                {
                    label: 'flex-center',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'display: flex;',
                        'justify-content: center;',
                        'align-items: center;'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Center content with flexbox'
                },
                {
                    label: 'grid',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'display: grid;',
                        'grid-template-columns: ${1:repeat(3, 1fr)};',
                        'gap: ${2:10px};'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'CSS Grid layout'
                },
                {
                    label: 'media-query',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        '@media (max-width: ${1:768px}) {',
                        '\t${2:/* Styles here */}',
                        '}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'CSS media query'
                },
                {
                    label: 'keyframes',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        '@keyframes ${1:animation} {',
                        '\t0% { ${2:opacity: 0;} }',
                        '\t100% { ${3:opacity: 1;} }',
                        '}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'CSS keyframes animation'
                },
                {
                    label: 'transition',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'transition: ${1:all} ${2:0.3s} ${3:ease};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'CSS transition'
                },
                {
                    label: 'box-shadow',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'box-shadow: ${1:0 2px 4px} ${2:rgba(0,0,0,0.1)};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'CSS box shadow'
                },
                {
                    label: 'border-radius',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'border-radius: ${1:4px};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'CSS border radius'
                },
                {
                    label: 'flex-center',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'display: flex;',
                        'justify-content: center;',
                        'align-items: center;'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Center content with flexbox'
                },
                {
                    label: 'grid',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'display: grid;',
                        'grid-template-columns: ${1:repeat(3, 1fr)};',
                        'gap: ${2:10px};'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'CSS Grid layout'
                },
                {
                    label: 'flex-column',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'display: flex;',
                        'flex-direction: column;',
                        'align-items: center;'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Flexbox column layout'
                },
                {
                    label: 'position-absolute',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'position: absolute;',
                        'top: ${1:0};',
                        'left: ${2:0};'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Absolute positioning'
                },
                {
                    label: 'position-relative',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'position: relative;',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Relative positioning'
                },
                {
                    label: 'position-fixed',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'position: fixed;',
                        'top: ${1:0};',
                        'left: ${2:0};',
                        'z-index: ${3:1000};'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Fixed positioning'
                },
                {
                    label: 'margin-auto',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'margin: 0 auto;',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Center element horizontally'
                },
                {
                    label: 'padding-all',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'padding: ${1:10px};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Padding on all sides'
                },
                {
                    label: 'font-family',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'font-family: ${1:\'Arial\', sans-serif};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Font family declaration'
                },
                {
                    label: 'background-color',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'background-color: ${1:#ffffff};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Background color'
                },
                {
                    label: 'color',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'color: ${1:#000000};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Text color'
                },
                {
                    label: 'width-height',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'width: ${1:100px};',
                        'height: ${2:100px};'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Width and height'
                },
                {
                    label: 'max-width',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'max-width: ${1:1200px};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Maximum width'
                },
                {
                    label: 'min-height',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'min-height: ${1:100vh};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Minimum height'
                },
                {
                    label: 'border',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'border: ${1:1px solid #000000};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Border declaration'
                },
                {
                    label: 'border-bottom',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'border-bottom: ${1:1px solid #cccccc};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Bottom border'
                },
                {
                    label: 'text-align',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'text-align: ${1:center};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Text alignment'
                },
                {
                    label: 'text-decoration',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'text-decoration: ${1:none};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Text decoration'
                },
                {
                    label: 'cursor',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'cursor: ${1:pointer};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Cursor style'
                },
                {
                    label: 'overflow',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'overflow: ${1:hidden};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Overflow handling'
                },
                {
                    label: 'z-index',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'z-index: ${1:10};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Z-index for layering'
                },
            ];
            return { suggestions: suggestions };
        }
    });

    // JavaScript Snippets
    monaco.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems: function(model, position) {
            const suggestions = [
                {
                    label: 'function',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'function ${1:name}(${2:params}) {',
                        '\t${3:// code here}',
                        '}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript function declaration'
                },
                {
                    label: 'arrow-function',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'const ${1:name} = (${2:params}) => ${3:expression};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript arrow function'
                },
                {
                    label: 'if',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'if (${1:condition}) {',
                        '\t${2:// code here}',
                        '}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript if statement'
                },
                {
                    label: 'if-else',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'if (${1:condition}) {',
                        '\t${2:// code here}',
                        '} else {',
                        '\t${3:// code here}',
                        '}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript if-else statement'
                },
                {
                    label: 'for-loop',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'for (let ${1:i} = 0; ${1:i} < ${2:array}.length; ${1:i}++) {',
                        '\t${3:// code here}',
                        '}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript for loop'
                },
                {
                    label: 'forEach',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '${1:array}.forEach((${2:item}) => {\n\t${3:// code here}\n});',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript forEach loop'
                },
                {
                    label: 'try-catch',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'try {',
                        '\t${1:// code here}',
                        '} catch (${2:error}) {',
                        '\t${3:// handle error}',
                        '}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript try-catch block'
                },
                {
                    label: 'async-function',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'async function ${1:name}(${2:params}) {',
                        '\ttry {',
                        '\t\t${3:// async code here}',
                        '\t} catch (error) {',
                        '\t\tconsole.error(error);',
                        '\t}',
                        '}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript async function with error handling'
                },
                {
                    label: 'promise',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'new Promise((resolve, reject) => {',
                        '\t${1:// async operation}',
                        '\tresolve(${2:value});',
                        '})'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript Promise'
                },
                {
                    label: 'fetch',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'fetch(\'${1:url}\')',
                        '\t.then(response => response.json())',
                        '\t.then(data => {',
                        '\t\t${2:// handle data}',
                        '\t})',
                        '\t.catch(error => {',
                        '\t\tconsole.error(\'Error:\', error);',
                        '\t});'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript fetch API'
                },
                {
                    label: 'addEventListener',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '${1:element}.addEventListener(\'${2:click}\', (${3:event}) => {\n\t${4:// handle event}\n});',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript event listener'
                },
                {
                    label: 'console.log',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'console.log(${1:value});',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript console.log'
                },
                {
                    label: 'setTimeout',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'setTimeout(() => {\n\t${1:// code here}\n}, ${2:1000});',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript setTimeout'
                },
                {
                    label: 'setInterval',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'setInterval(() => {\n\t${1:// code here}\n}, ${2:1000});',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript setInterval'
                },
                {
                    label: 'class',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'class ${1:Name} {',
                        '\tconstructor(${2:params}) {',
                        '\t\t${3:// initialization}',
                        '\t}',
                        '\t',
                        '\t${4:method}() {',
                        '\t\t${5:// method body}',
                        '\t}',
                        '}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript class'
                },
                {
                    label: 'const',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'const ${1:name} = ${2:value};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript const declaration'
                },
                {
                    label: 'let',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'let ${1:name} = ${2:value};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript let declaration'
                },
                {
                    label: 'var',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'var ${1:name} = ${2:value};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript var declaration'
                },
                {
                    label: 'array',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'const ${1:array} = [${2:item1}, ${3:item2}, ${4:item3}];',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript array declaration'
                },
                {
                    label: 'object',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'const ${1:object} = {',
                        '\t${2:key1}: ${3:value1},',
                        '\t${4:key2}: ${5:value2}',
                        '};'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript object declaration'
                },
                {
                    label: 'map',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'const ${1:map} = new Map();',
                        '${1:map}.set(\'${2:key}\', ${3:value});'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript Map'
                },
                {
                    label: 'set',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'const ${1:set} = new Set();',
                        '${1:set}.add(${2:value});'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript Set'
                },
                {
                    label: 'switch',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'switch (${1:expression}) {',
                        '\tcase ${2:value1}:',
                        '\t\t${3:// code here}',
                        '\t\tbreak;',
                        '\tcase ${4:value2}:',
                        '\t\t${5:// code here}',
                        '\t\tbreak;',
                        '\tdefault:',
                        '\t\t${6:// code here}',
                        '}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript switch statement'
                },
                {
                    label: 'while',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'while (${1:condition}) {',
                        '\t${2:// code here}',
                        '}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript while loop'
                },
                {
                    label: 'do-while',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'do {',
                        '\t${1:// code here}',
                        '} while (${2:condition});'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript do-while loop'
                },
                {
                    label: 'querySelector',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'document.querySelector(\'${1:selector}\');',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'DOM querySelector'
                },
                {
                    label: 'querySelectorAll',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'document.querySelectorAll(\'${1:selector}\');',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'DOM querySelectorAll'
                },
                {
                    label: 'getElementById',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'document.getElementById(\'${1:id}\');',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'DOM getElementById'
                },
                {
                    label: 'addEventListener',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '${1:element}.addEventListener(\'${2:click}\', (${3:event}) => {\n\t${4:// handle event}\n});',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JavaScript event listener'
                },
                {
                    label: 'localStorage',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        '// Save to localStorage',
                        'localStorage.setItem(\'${1:key}\', ${2:value});',
                        '',
                        '// Get from localStorage',
                        'const ${3:data} = localStorage.getItem(\'${1:key}\');'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'localStorage operations'
                },
                {
                    label: 'JSON',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        '// Parse JSON',
                        'const ${1:data} = JSON.parse(${2:jsonString});',
                        '',
                        '// Stringify object',
                        'const ${3:jsonString} = JSON.stringify(${4:object});'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'JSON operations'
                },
                {
                    label: 'import',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'import { ${1:name} } from \'${2:module}\';',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'ES6 import statement'
                },
                {
                    label: 'export',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'export ${1:const} ${2:name} = ${3:value};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'ES6 export statement'
                },
                {
                    label: 'default-export',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'export default ${1:function};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'ES6 default export'
                }
            ];
            return { suggestions: suggestions };
        }
    });
}

require(['vs/editor/editor.main'], function(){
    // Register custom snippets
    registerSnippets();

    editor = monaco.editor.create(document.getElementById('editor'),{
        value:'',
        language:'javascript',
        theme:'vs-dark',
        automaticLayout:true,
        fontSize: 14,
        fontFamily: "'Fira Code', Consolas, 'Courier New', monospace",
        fontLigatures: true,
        wordWrap: 'on',
        minimap: { enabled: true },
        smoothScrolling: true,
        cursorBlinking: "smooth",
        cursorSmoothCaretAnimation: "on",
        formatOnPaste: true,
        formatOnType: true,
        suggestOnTriggerCharacters: true,
        acceptSuggestionOnEnter: "on",
        tabCompletion: "on",
        wordBasedSuggestions: true,
        parameterHints: {
            enabled: true
        },
        hover: {
            enabled: true
        },
        contextmenu: true,
        mouseWheelZoom: true,
        multiCursorModifier: "ctrlCmd",
        renderWhitespace: "selection",
        renderControlCharacters: true,
        fontLigatures: true,
        folding: true,
        foldingStrategy: "indentation",
        showFoldingControls: "mouseover",
        unfoldOnClickAfterEndOfLine: true,
        matchBrackets: "always",
        autoClosingBrackets: "always",
        autoClosingQuotes: "always",
        autoSurround: "languageDefined",
        codeLens: true,
        lightbulb: {
            enabled: "on"
        },
        quickSuggestions: {
            other: true,
            comments: true,
            strings: true
        },
        suggest: {
            showKeywords: true,
            showSnippets: true,
            showClasses: true,
            showFunctions: true,
            showVariables: true,
            showModules: true,
            showProperties: true,
            showEvents: true,
            showOperators: true,
            showValues: true,
            showConstants: true,
            showEnums: true,
            showEnumMembers: true,
            showStructs: true,
            showInterfaces: true,
            showTypeParameters: true,
            showIssues: true,
            showUsers: true,
            showFolders: true,
            showFiles: true,
            showReferences: true,
            showColors: true,
            showIcons: true,
            filterGraceful: true,
            localityBonus: true,
            shareSuggestSelections: true,
            showInlineDetails: true,
            preview: true,
            showDeprecated: true
        }
    });
    
    editor.onDidChangeModelContent(() => {
        if(activeTabId){
            const activeTab = openTabs.find(t => t.id === activeTabId);
            if(activeTab){
                activeTab.content = editor.getValue();
            }
        }
        detectProblems();
        updateOutline(); // Update outline when content changes
    });

    initEditorSync();
    renderEditor();
});

document.addEventListener('DOMContentLoaded', () => {
    initResizers();
    renderExplorer();
    initActivityBar();
    initTerminal();
    initPanelTabs();
    initKeyboardShortcuts();
    initContextMenu();
    initDropdowns();

    // Show welcome screen on first load
    if (!localStorage.getItem('hasVisited')) {
        setTimeout(() => {
            showWelcome();
            localStorage.setItem('hasVisited', 'true');
        }, 500);
    }
});

// --- File System State ---
const fileSystem = {
    id: "root",
    name: "vscode-clone-project",
    type: "folder",
    expanded: true,
    children: [
        { id: "1", name: "index.html", type: "file", language: "html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Clone</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>" },
        { id: "2", name: "style.css", type: "file", language: "css", content: "body {\n  background-color: #1e1e1e;\n  color: #d4d4d4;\n}" },
        { id: "3", name: "script.js", type: "file", language: "javascript", content: "console.log('Welcome to JS');\n\nfunction init() {\n  // do something\n}" },
        { id: "4", name: "lib", type: "folder", expanded: true, children: [
            { id: "5", name: "main.dart", type: "file", language: "dart", content: "import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n        appBar: AppBar(title: const Text('Flutter App')),\n        body: const Center(child: Text('Hello World')),\n      ),\n    );\n  }\n}" }
        ]}
    ]
};

let openTabs = [];
let activeTabId = null;
let currentDirectory = '/';
let commandHistory = [];
let historyIndex = -1;
let editorPanes = [{ id: 'main', editor: null, tabs: [], activeTabId: null }];
let activePaneId = 'main';

// Split editor functionality
function splitEditor(direction = 'vertical') {
    const mainEditorArea = document.querySelector('.editor-area');
    const currentPane = editorPanes.find(p => p.id === activePaneId);

    if (!currentPane) return;

    // Create split container
    const splitContainer = document.createElement('div');
    splitContainer.className = `editor-split ${direction}`;
    splitContainer.id = `split-${Date.now()}`;

    // Create first pane (existing content)
    const pane1 = document.createElement('div');
    pane1.className = 'editor-pane';
    pane1.id = `pane-${currentPane.id}`;

    // Create second pane
    const newPaneId = `pane-${Date.now()}`;
    const pane2 = document.createElement('div');
    pane2.className = 'editor-pane';
    pane2.id = newPaneId;

    // Create resizer
    const resizer = document.createElement('div');
    resizer.className = direction === 'vertical' ? 'vertical-resizer' : 'horizontal-resizer';
    resizer.id = `resizer-${Date.now()}`;

    // Move existing content to pane1
    const existingTabs = mainEditorArea.querySelector('.editor-tabs');
    const existingContent = mainEditorArea.querySelector('.editor-content');

    pane1.appendChild(existingTabs.cloneNode(true));
    pane1.appendChild(existingContent.cloneNode(true));

    // Set up pane2 with new editor
    pane2.innerHTML = `
        <div class="editor-tabs"></div>
        <div class="editor-content">
            <div class="editor-instance" id="editor-${newPaneId}"></div>
        </div>
    `;

    // Assemble split
    if (direction === 'vertical') {
        splitContainer.appendChild(pane1);
        splitContainer.appendChild(resizer);
        splitContainer.appendChild(pane2);
    } else {
        splitContainer.appendChild(pane1);
        splitContainer.appendChild(resizer);
        splitContainer.appendChild(pane2);
    }

    // Replace main editor area content
    mainEditorArea.innerHTML = '';
    mainEditorArea.appendChild(splitContainer);

    // Update editor panes data
    const newPane = {
        id: newPaneId,
        editor: null,
        tabs: [],
        activeTabId: null
    };

    editorPanes = [
        { ...currentPane, id: `pane-${currentPane.id}` },
        newPane
    ];

    activePaneId = newPaneId;

    // Initialize new editor
    setTimeout(() => {
        initializeEditorForPane(newPaneId);
        initSplitResizers();
    }, 100);
}

function initializeEditorForPane(paneId) {
    const editorElement = document.getElementById(`editor-${paneId}`);
    if (!editorElement) return;

    const pane = editorPanes.find(p => p.id === paneId);
    if (!pane) return;

    require(['vs/editor/editor.main'], function() {
        pane.editor = monaco.editor.create(editorElement, {
            value: '',
            language: 'javascript',
            theme: 'vs-dark',
            automaticLayout: true,
            fontSize: 14,
            fontFamily: "'Fira Code', Consolas, 'Courier New', monospace",
            fontLigatures: true,
            wordWrap: 'on',
            minimap: { enabled: true },
            smoothScrolling: true,
            cursorBlinking: "smooth",
            cursorSmoothCaretAnimation: "on",
            formatOnPaste: true,
            formatOnType: true,
            suggestOnTriggerCharacters: true,
            acceptSuggestionOnEnter: "on",
            tabCompletion: "on",
            wordBasedSuggestions: true,
            parameterHints: { enabled: true },
            hover: { enabled: true },
            contextmenu: true,
            mouseWheelZoom: true,
            multiCursorModifier: "ctrlCmd",
            renderWhitespace: "selection",
            renderControlCharacters: true,
            fontLigatures: true,
            folding: true,
            foldingStrategy: "indentation",
            showFoldingControls: "mouseover",
            unfoldOnClickAfterEndOfLine: true,
            matchBrackets: "always",
            autoClosingBrackets: "always",
            autoClosingQuotes: "always",
            autoSurround: "languageDefined",
            codeLens: true,
            lightbulb: { enabled: "on" },
            quickSuggestions: {
                other: true,
                comments: true,
                strings: true
            }
        });

        pane.editor.onDidChangeModelContent(() => {
            if (pane.activeTabId) {
                const activeTab = pane.tabs.find(t => t.id === pane.activeTabId);
                if (activeTab) {
                    activeTab.content = pane.editor.getValue();
                }
            }
            detectProblems();
        });

        pane.editor.onDidChangeCursorPosition((e) => {
            if (pane.id === activePaneId) {
                const statusLineCol = document.getElementById('status-line-col');
                statusLineCol.textContent = `Ln ${e.position.lineNumber}, Col ${e.position.column}`;
            }
        });
    });
}

function initSplitResizers() {
    document.querySelectorAll('.editor-split .vertical-resizer, .editor-split .horizontal-resizer').forEach(resizer => {
        let isResizing = false;
        let startX, startY, startWidth, startHeight;

        resizer.addEventListener('mousedown', (e) => {
            isResizing = true;
            startX = e.clientX;
            startY = e.clientY;

            const prevPane = resizer.previousElementSibling;
            const nextPane = resizer.nextElementSibling;

            if (resizer.classList.contains('vertical-resizer')) {
                startWidth = prevPane.offsetWidth;
            } else {
                startHeight = prevPane.offsetHeight;
            }

            document.body.style.cursor = resizer.classList.contains('vertical-resizer') ? 'ew-resize' : 'ns-resize';
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;

            const prevPane = resizer.previousElementSibling;
            const nextPane = resizer.nextElementSibling;

            if (resizer.classList.contains('vertical-resizer')) {
                const diff = e.clientX - startX;
                const newWidth = startWidth + diff;
                const containerWidth = resizer.parentElement.offsetWidth;

                if (newWidth > 200 && newWidth < containerWidth - 200) {
                    prevPane.style.width = newWidth + 'px';
                    nextPane.style.width = (containerWidth - newWidth - resizer.offsetWidth) + 'px';
                }
            } else {
                const diff = e.clientY - startY;
                const newHeight = startHeight + diff;
                const containerHeight = resizer.parentElement.offsetHeight;

                if (newHeight > 150 && newHeight < containerHeight - 150) {
                    prevPane.style.height = newHeight + 'px';
                    nextPane.style.height = (containerHeight - newHeight - resizer.offsetHeight) + 'px';
                }
            }
        });

        document.addEventListener('mouseup', () => {
            isResizing = false;
            document.body.style.cursor = 'default';
        });
    });
}

// File system utilities
function getLanguageFromExtension(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    const langMap = {
        'js': 'javascript', 'ts': 'typescript', 'jsx': 'javascript', 'tsx': 'typescript',
        'py': 'python', 'java': 'java', 'cpp': 'cpp', 'c': 'c', 'cs': 'csharp',
        'php': 'php', 'rb': 'ruby', 'go': 'go', 'rs': 'rust', 'swift': 'swift',
        'kt': 'kotlin', 'scala': 'scala', 'dart': 'dart', 'html': 'html', 'css': 'css',
        'scss': 'scss', 'less': 'less', 'json': 'json', 'xml': 'xml', 'yaml': 'yaml',
        'yml': 'yaml', 'md': 'markdown', 'sql': 'sql', 'sh': 'shell', 'bash': 'shell'
    };
    return langMap[ext] || 'plaintext';
}

function saveFileToStorage(node) {
    const key = `file_${node.id}`;
    localStorage.setItem(key, JSON.stringify({
        id: node.id,
        name: node.name,
        type: node.type,
        content: node.content,
        language: node.language
    }));
}

function loadFileFromStorage(id) {
    const key = `file_${id}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function saveFileSystemToStorage() {
    localStorage.setItem('fileSystem', JSON.stringify(fileSystem));
}

function loadFileSystemFromStorage() {
    const data = localStorage.getItem('fileSystem');
    if (data) {
        Object.assign(fileSystem, JSON.parse(data));
    }
}

// Load saved data on startup
loadFileSystemFromStorage();

// --- Resizers ---
function initResizers() {
    const sidebar = document.getElementById('sidebar');
    const sidebarResizer = document.getElementById('sidebar-resizer');
    const bottomPanel = document.getElementById('bottom-panel');
    const panelResizer = document.getElementById('panel-resizer');
    
    let isResizingSidebar = false;
    let isResizingPanel = false;

    sidebarResizer.addEventListener('mousedown', (e) => {
        isResizingSidebar = true;
        sidebarResizer.classList.add('active');
        document.body.style.cursor = 'ew-resize';
        e.preventDefault();
    });

    panelResizer.addEventListener('mousedown', (e) => {
        isResizingPanel = true;
        panelResizer.classList.add('active');
        document.body.style.cursor = 'ns-resize';
        e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
        if (isResizingSidebar) {
            const newWidth = e.clientX - 48; // 48px is the activity bar width
            if (newWidth > 150 && newWidth < 600) {
                sidebar.style.width = newWidth + 'px';
            }
        } else if (isResizingPanel) {
            const bottomOffset = window.innerHeight - e.clientY - 22; // 22px is the status bar
            if (bottomOffset > 100 && bottomOffset < window.innerHeight - 200) {
                bottomPanel.style.height = bottomOffset + 'px';
            }
        }
    });

    window.addEventListener('mouseup', () => {
        if (isResizingSidebar) {
            isResizingSidebar = false;
            sidebarResizer.classList.remove('active');
            document.body.style.cursor = 'default';
        }
        if (isResizingPanel) {
            isResizingPanel = false;
            panelResizer.classList.remove('active');
            document.body.style.cursor = 'default';
        }
    });
}

// --- Explorer Rendering ---
function renderExplorer() {
    const sidebarContent = document.getElementById('sidebar-content');
    sidebarContent.innerHTML = ''; 
    const rootEl = createTreeNode(fileSystem, 0);
    sidebarContent.appendChild(rootEl);
}

function renderSearchPanel() {
    const sidebarContent = document.getElementById('sidebar-content');
    sidebarContent.innerHTML = `
        <div class="search-panel">
            <div class="search-input-container">
                <i class="codicon codicon-search"></i>
                <input type="text" id="search-input" placeholder="Search" autocomplete="off">
                <button id="search-replace-toggle" title="Toggle Replace">
                    <i class="codicon codicon-replace"></i>
                </button>
            </div>
            <div class="search-replace-container" id="replace-container" style="display: none;">
                <i class="codicon codicon-replace-all"></i>
                <input type="text" id="replace-input" placeholder="Replace" autocomplete="off">
            </div>
            <div class="search-options">
                <label><input type="checkbox" id="match-case"> Match Case</label>
                <label><input type="checkbox" id="match-whole-word"> Match Whole Word</label>
                <label><input type="checkbox" id="use-regex"> Use Regular Expression</label>
            </div>
            <div class="search-results" id="search-results">
                <div class="search-summary">No results found</div>
            </div>
        </div>
    `;

    // Add event listeners
    const searchInput = document.getElementById('search-input');
    const replaceInput = document.getElementById('replace-input');
    const replaceToggle = document.getElementById('search-replace-toggle');
    const replaceContainer = document.getElementById('replace-container');

    replaceToggle.addEventListener('click', () => {
        replaceContainer.style.display = replaceContainer.style.display === 'none' ? 'flex' : 'none';
    });

    searchInput.addEventListener('input', performSearch);
    replaceInput.addEventListener('input', performSearch);

    document.getElementById('match-case').addEventListener('change', performSearch);
    document.getElementById('match-whole-word').addEventListener('change', performSearch);
    document.getElementById('use-regex').addEventListener('change', performSearch);
}

function performSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value;
    const resultsDiv = document.getElementById('search-results');

    if (!query) {
        resultsDiv.innerHTML = '<div class="search-summary">No results found</div>';
        return;
    }

    const matchCase = document.getElementById('match-case').checked;
    const matchWholeWord = document.getElementById('match-whole-word').checked;
    const useRegex = document.getElementById('use-regex').checked;

    const files = getAllFiles(fileSystem);
    let results = [];
    let totalMatches = 0;

    files.forEach(file => {
        if (file.type === 'file' && file.content) {
            const lines = file.content.split('\n');
            lines.forEach((line, lineIndex) => {
                let searchTerm = query;
                let flags = matchCase ? 'g' : 'gi';

                if (matchWholeWord) {
                    searchTerm = `\\b${query}\\b`;
                }

                let regex;
                try {
                    regex = useRegex ? new RegExp(searchTerm, flags) : new RegExp(escapeRegExp(query), flags);
                } catch (e) {
                    return; // Invalid regex
                }

                const matches = line.match(regex);
                if (matches) {
                    totalMatches += matches.length;
                    results.push({
                        file: file,
                        line: lineIndex + 1,
                        content: line.trim(),
                        matches: matches.length
                    });
                }
            });
        }
    });

    if (results.length === 0) {
        resultsDiv.innerHTML = '<div class="search-summary">No results found</div>';
    } else {
        resultsDiv.innerHTML = `
            <div class="search-summary">${totalMatches} results in ${results.length} files</div>
            ${results.map(result => `
                <div class="search-result" data-file="${result.file.id}" data-line="${result.line}">
                    <div class="search-result-file">${result.file.name}</div>
                    <div class="search-result-line">${result.line}: ${escapeHtml(result.content)}</div>
                </div>
            `).join('')}
        `;

        // Add click handlers
        document.querySelectorAll('.search-result').forEach(resultEl => {
            resultEl.addEventListener('click', () => {
                const fileId = resultEl.dataset.file;
                const line = parseInt(resultEl.dataset.line);
                const file = getAllFiles(fileSystem).find(f => f.id === fileId);
                if (file) {
                    openFile(file);
                    // Scroll to line after editor is ready
                    setTimeout(() => {
                        if (editor) {
                            editor.revealLine(line);
                            editor.setPosition({ lineNumber: line, column: 1 });
                        }
                    }, 100);
                }
            });
        });
    }
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function createTreeNode(node, depth) {
    const el = document.createElement('div');
    el.className = 'tree-node';
    
    const nodeRow = document.createElement('div');
    nodeRow.className = 'tree-node-row';
    nodeRow.style.paddingLeft = (depth * 15 + 10) + 'px';
    
    const iconEl = document.createElement('i');
    if (node.type === 'folder') {
        iconEl.className = node.expanded ? 'fa-solid fa-chevron-down folder-icon' : 'fa-solid fa-chevron-right folder-icon';
        iconEl.style.marginRight = '5px';
        iconEl.style.width = '12px';
    } else {
        if (node.name.endsWith('.html')) iconEl.className = 'fa-brands fa-html5 file-icon html-icon';
        else if (node.name.endsWith('.css')) iconEl.className = 'fa-brands fa-css3-alt file-icon css-icon';
        else if (node.name.endsWith('.js')) iconEl.className = 'fa-brands fa-js file-icon js-icon';
        else if (node.name.endsWith('.dart')) iconEl.className = 'fa-brands fa-flutter file-icon dart-icon';
        else iconEl.className = 'fa-regular fa-file file-icon';
        
        iconEl.style.marginRight = '5px';
        iconEl.style.width = '14px';
        iconEl.style.textAlign = 'center';
    }
    
    const nameEl = document.createElement('span');
    nameEl.textContent = node.name;
    
    nodeRow.appendChild(iconEl);
    nodeRow.appendChild(nameEl);
    el.appendChild(nodeRow);
    
    nodeRow.addEventListener('click', (e) => {
        e.stopPropagation();
        if (node.type === 'folder') {
            node.expanded = !node.expanded;
            renderExplorer();
        } else {
            openFile(node);
        }
    });
    
    if (node.type === 'folder' && node.expanded && node.children) {
        const childrenContainer = document.createElement('div');
        node.children.forEach(child => {
            childrenContainer.appendChild(createTreeNode(child, depth + 1));
        });
        el.appendChild(childrenContainer);
    }
    return el;
}

// --- Editor and Tabs ---
function openFile(node, paneId = activePaneId) {
    const pane = editorPanes.find(p => p.id === paneId);
    if (!pane) return;

    // Load content from storage if available
    const savedFile = loadFileFromStorage(node.id);
    if (savedFile) {
        node.content = savedFile.content;
    }

    const existingIndex = pane.tabs.findIndex(t => t.id === node.id);
    if (existingIndex === -1) {
        pane.tabs.push(node);
    }
    pane.activeTabId = node.id;
    activePaneId = paneId;

    // Also keep the legacy tab state in sync so legacy render functions still work
    const globalIndex = openTabs.findIndex(t => t.id === node.id);
    if (globalIndex === -1) {
        openTabs.push(node);
    }
    activeTabId = node.id;

    renderTabsForPane(paneId);
    renderEditorForPane(paneId);
}

function renderTabsForPane(paneId) {
    const pane = editorPanes.find(p => p.id === paneId);
    if (!pane) return;

    // In the initial layout we don't have a container with id="main", so fall back to the default tabs container.
    // When split view is active, each pane has its own tabs container.
    const tabsContainer = paneId === 'main'
        ? document.getElementById('editor-tabs')
        : document.getElementById(paneId)?.querySelector('.editor-tabs');

    if (!tabsContainer) return;

    tabsContainer.innerHTML = '';

    pane.tabs.forEach(tabData => {
        const tabEl = document.createElement('div');
        tabEl.className = 'tab ' + (tabData.id === pane.activeTabId ? 'active' : '');

        let iconClass = 'fa-regular fa-file';
        let iconColor = '#cccccc';
        if (tabData.name.endsWith('.html')) { iconClass = 'fa-brands fa-html5'; iconColor = '#e34c26'; }
        if (tabData.name.endsWith('.css')) { iconClass = 'fa-brands fa-css3-alt'; iconColor = '#264de4'; }
        if (tabData.name.endsWith('.js')) { iconClass = 'fa-brands fa-js'; iconColor = '#f7df1e'; }
        if (tabData.name.endsWith('.dart')) { iconClass = 'fa-brands fa-flutter'; iconColor = '#0175C2'; }

        tabEl.innerHTML = `
            <i class="tab-icon ${iconClass}" style="color: ${iconColor}"></i>
            <span>${tabData.name}</span>
            <i class="fa-solid fa-xmark tab-close"></i>
        `;

        tabEl.addEventListener('click', () => {
            pane.activeTabId = tabData.id;
            activePaneId = paneId;
            renderTabsForPane(paneId);
            renderEditorForPane(paneId);
            renderBreadcrumbs(paneId);
        });

        const closeBtn = tabEl.querySelector('.tab-close');
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeTabInPane(tabData.id, paneId);
        });

        tabsContainer.appendChild(tabEl);
    });
}

function closeTabInPane(tabId, paneId) {
    const pane = editorPanes.find(p => p.id === paneId);
    if (!pane) return;

    const index = pane.tabs.findIndex(t => t.id === tabId);
    if (index !== -1) {
        pane.tabs.splice(index, 1);
        if (pane.tabs.length > 0) {
            pane.activeTabId = pane.tabs[Math.max(0, index - 1)].id;
        } else {
            pane.activeTabId = null;
        }
        renderTabsForPane(paneId);
        renderEditorForPane(paneId);
    }
}

function renderEditorForPane(paneId) {
    const pane = editorPanes.find(p => p.id === paneId);
    if (!pane) return;

    // Use the editor instance attached to the pane (split view),
    // otherwise fall back to the global editor instance for the main pane.
    const editorInstance = pane.editor || editor;
    if (!editorInstance) return;

    const langStatus = document.getElementById('status-language');

    if (pane.activeTabId) {
        const activeTab = pane.tabs.find(t => t.id === pane.activeTabId);
        if (!activeTab) return;

        if (activeTab.id === 'welcome') {
            document.getElementById('editor').style.display = 'none';
            if (document.getElementById('vscode-welcome')) document.getElementById('vscode-welcome').style.display = 'flex';
            if (paneId === activePaneId) {
                langStatus.textContent = '';
                renderBreadcrumbs(paneId);
            }
        } else {
            document.getElementById('editor').style.display = 'block';
            if (document.getElementById('vscode-welcome')) document.getElementById('vscode-welcome').style.display = 'none';
            editorInstance.setValue(activeTab.content || '');
            const lang = activeTab.language || getLanguageFromExtension(activeTab.name);
            monaco.editor.setModelLanguage(editorInstance.getModel(), lang);

            if (paneId === activePaneId) {
                langStatus.textContent = lang.toUpperCase();
                renderBreadcrumbs(paneId);
            }
            detectProblems();
        }
    } else {
        editorInstance.setValue('');
        document.getElementById('editor').style.display = 'none';
        if (document.getElementById('vscode-welcome')) document.getElementById('vscode-welcome').style.display = 'flex';
        if (paneId === activePaneId) {
            renderBreadcrumbs(paneId);
        }
    }
}

function renderBreadcrumbs(paneId) {
    const pane = editorPanes.find(p => p.id === paneId);
    if (!pane || !pane.activeTabId) {
        document.getElementById('breadcrumbs').innerHTML = '';
        return;
    }

    const activeTab = pane.tabs.find(t => t.id === pane.activeTabId);
    if (!activeTab) {
        document.getElementById('breadcrumbs').innerHTML = '';
        return;
    }

    const breadcrumbsEl = document.getElementById('breadcrumbs');
    breadcrumbsEl.innerHTML = '';

    // Get file path (for now, just show the filename, but we can extend this)
    const pathParts = activeTab.name.split('/');

    pathParts.forEach((part, index) => {
        if (index > 0) {
            const separator = document.createElement('span');
            separator.className = 'breadcrumb-separator';
            separator.textContent = '/';
            breadcrumbsEl.appendChild(separator);
        }

        const item = document.createElement('div');
        item.className = 'breadcrumb-item' + (index === pathParts.length - 1 ? ' active' : '');

        let iconClass = 'fa-regular fa-file';
        let iconColor = '#cccccc';
        if (part.endsWith('.html')) { iconClass = 'fa-brands fa-html5'; iconColor = '#e34c26'; }
        if (part.endsWith('.css')) { iconClass = 'fa-brands fa-css3-alt'; iconColor = '#264de4'; }
        if (part.endsWith('.js')) { iconClass = 'fa-brands fa-js'; iconColor = '#f7df1e'; }
        if (part.endsWith('.dart')) { iconClass = 'fa-brands fa-flutter'; iconColor = '#0175C2'; }

        item.innerHTML = `
            <span class="breadcrumb-icon"><i class="${iconClass}" style="color: ${iconColor}"></i></span>
            <span>${part}</span>
        `;

        // Add click handler for navigation (can be extended later)
        item.addEventListener('click', () => {
            // For now, just focus the editor
            if (pane.editor) {
                pane.editor.focus();
            }
        });

        breadcrumbsEl.appendChild(item);
    });
}

function saveCurrentFile() {
    const pane = editorPanes.find(p => p.id === activePaneId);
    if (!pane || !pane.activeTabId) return;

    const activeTab = pane.tabs.find(t => t.id === pane.activeTabId);
    if (activeTab) {
        activeTab.content = pane.editor.getValue();
        saveFileToStorage(activeTab);
        saveFileSystemToStorage();

        logOutput(`Saved ${activeTab.name}`, 'success');

        // Visual feedback
        showNotification(`Saved ${activeTab.name}`, 'success');
    }
}

function newFile() {
    const name = prompt("Enter file name (e.g., test.js):");
    if (name) {
        const language = getLanguageFromExtension(name);
        const newFile = {
            id: Date.now().toString(),
            name: name,
            type: 'file',
            language: language,
            content: ''
        };

        // Add to root or current folder
        if (!fileSystem.children) fileSystem.children = [];
        fileSystem.children.push(newFile);

        saveFileSystemToStorage();
        renderExplorer();
        openFile(newFile);
    }
}

function newFolder() {
    const name = prompt("Enter folder name:");
    if (name) {
        const newFolder = {
            id: Date.now().toString(),
            name: name,
            type: 'folder',
            expanded: false,
            children: []
        };

        if (!fileSystem.children) fileSystem.children = [];
        fileSystem.children.push(newFolder);

        saveFileSystemToStorage();
        renderExplorer();
    }
}

function renderTabs() {
    const tabsContainer = document.getElementById('editor-tabs');
    tabsContainer.innerHTML = '';
    
    openTabs.forEach(tabData => {
        const tabEl = document.createElement('div');
        tabEl.className = 'tab ' + (tabData.id === activeTabId ? 'active' : '');
        
        let iconClass = 'fa-regular fa-file';
        let iconColor = '#cccccc';
        if (tabData.name.endsWith('.html')) { iconClass = 'fa-brands fa-html5'; iconColor = '#e34c26'; }
        if (tabData.name.endsWith('.css')) { iconClass = 'fa-brands fa-css3-alt'; iconColor = '#264de4'; }
        if (tabData.name.endsWith('.js')) { iconClass = 'fa-brands fa-js'; iconColor = '#f7df1e'; }
        if (tabData.name.endsWith('.dart')) { iconClass = 'fa-brands fa-flutter'; iconColor = '#0175C2'; }
        
        tabEl.innerHTML = `
            <i class="tab-icon ${iconClass}" style="color: ${iconColor}"></i>
            <span>${tabData.name}</span>
            <i class="fa-solid fa-xmark tab-close"></i>
        `;
        
        tabEl.addEventListener('click', () => {
            activeTabId = tabData.id;
            renderTabs();
            renderEditor();
        });
        
        const closeBtn = tabEl.querySelector('.tab-close');
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeTab(tabData.id);
        });
        
        tabsContainer.appendChild(tabEl);
    });
}

function closeTab(id) {
    const index = openTabs.findIndex(t => t.id === id);
    if (index !== -1) {
        openTabs.splice(index, 1);
        if (openTabs.length > 0) {
            activeTabId = openTabs[Math.max(0, index - 1)].id;
        } else {
            activeTabId = null;
        }
        renderTabs();
        renderEditor();
    }
}

function renderEditor() {
 const langStatus = document.getElementById('status-language');

 if (activeTabId && editor) {
  const activeTab = openTabs.find(t => t.id === activeTabId);
  if (activeTab && activeTab.id === 'welcome') {
      document.getElementById('editor').style.display = 'none';
      if (document.getElementById('vscode-welcome')) document.getElementById('vscode-welcome').style.display = 'flex';
      langStatus.textContent = '';
  } else if (activeTab) {
      document.getElementById('editor').style.display = 'block';
      if (document.getElementById('vscode-welcome')) document.getElementById('vscode-welcome').style.display = 'none';
      editor.setValue(activeTab.content || '');
      const lang = activeTab.language || getLanguageFromExtension(activeTab.name);
      monaco.editor.setModelLanguage(editor.getModel(), lang);
      langStatus.textContent = lang.toUpperCase();
  }
 } else if(editor){
  editor.setValue('');
  document.getElementById('editor').style.display = 'none';
  if (document.getElementById('vscode-welcome')) document.getElementById('vscode-welcome').style.display = 'flex';
 }
}

// --- Editor Sync ---
function initEditorSync() {
    const statusLineCol = document.getElementById('status-line-col');
    
    if (!editor) return;

    editor.onDidChangeCursorPosition((e) => {
        statusLineCol.textContent = `Ln ${e.position.lineNumber}, Col ${e.position.column}`;
    });
}

// --- Terminal ---
function initTerminal() {
    const termInput = document.getElementById('terminal-input');
    const termOutput = document.getElementById('terminal-output');
    const panelContent = document.getElementById('terminal-content');
    const closePanelBtn = document.getElementById('close-panel-btn');
    const bottomPanel = document.getElementById('bottom-panel');

    closePanelBtn.addEventListener('click', () => {
        bottomPanel.style.display = 'none';
    });

    termInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = termInput.value.trim();
            if (cmd) {
                termOutput.innerHTML += `<div><span class="prompt">PS C:\\User\\Dev&gt;</span> ${escapeHtml(cmd)}</div>`;
                processCommand(cmd, termOutput);
                termInput.value = '';
                panelContent.scrollTop = panelContent.scrollHeight;
            }
        }
    });
}

// --- Panel Switching ---
function initPanelTabs() {
    const panelTabs = document.querySelectorAll('.panel-tab');
    const panelContents = {
        'PROBLEMS': 'problems-content',
        'OUTPUT': 'output-content',
        'DEBUG CONSOLE': 'debug-content',
        'TERMINAL': 'terminal-content',
        'PORTS': 'ports-content'
    };

    panelTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            panelTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Hide all panel contents
            Object.values(panelContents).forEach(contentId => {
                const content = document.getElementById(contentId);
                if (content) content.style.display = 'none';
            });

            // Show selected panel content
            const tabText = tab.textContent.trim();
            const contentId = panelContents[tabText];
            if (contentId) {
                const content = document.getElementById(contentId);
                if (content) content.style.display = 'block';
            }
        });
    });
}

// --- Problems Detection ---
let problems = [];

function detectProblems() {
    problems = [];
    const pane = editorPanes.find(p => p.id === activePaneId);
    if (!pane || !pane.activeTabId) return;

    const activeTab = pane.tabs.find(t => t.id === pane.activeTabId);
    if (!activeTab) return;

    const content = activeTab.content || '';
    const lines = content.split('\n');

    // Basic syntax checking for JavaScript
    if (activeTab.name.endsWith('.js')) {
        lines.forEach((line, index) => {
            // Check for common syntax issues
            if (line.includes('console.log(') && !line.includes(');')) {
                problems.push({
                    type: 'error',
                    message: 'Missing closing parenthesis',
                    file: activeTab.name,
                    line: index + 1,
                    column: line.indexOf('console.log(') + 1
                });
            }

            // Check for undefined variables (basic check)
            const varMatches = line.match(/\b(let|const|var)\s+(\w+)/g);
            if (varMatches) {
                varMatches.forEach(match => {
                    const varName = match.split(/\s+/)[1];
                    // Check if variable is used before declaration (simplified)
                    for (let i = 0; i < index; i++) {
                        if (lines[i].includes(varName) && !lines[i].match(/\b(let|const|var)\s+/)) {
                            problems.push({
                                type: 'warning',
                                message: `Variable '${varName}' used before declaration`,
                                file: activeTab.name,
                                line: i + 1,
                                column: lines[i].indexOf(varName) + 1
                            });
                        }
                    }
                });
            }
        });
    }

    // Basic syntax checking for HTML
    if (activeTab.name.endsWith('.html')) {
        let openTags = [];
        lines.forEach((line, index) => {
            const tagMatches = line.match(/<\/?[\w-]+[^>]*>/g);
            if (tagMatches) {
                tagMatches.forEach(tag => {
                    if (tag.startsWith('</')) {
                        // Closing tag
                        const tagName = tag.match(/<\/([\w-]+)/)?.[1];
                        if (tagName) {
                            const lastOpen = openTags.pop();
                            if (!lastOpen || lastOpen !== tagName) {
                                problems.push({
                                    type: 'error',
                                    message: `Mismatched closing tag '${tag}'`,
                                    file: activeTab.name,
                                    line: index + 1,
                                    column: line.indexOf(tag) + 1
                                });
                            }
                        }
                    } else if (!tag.endsWith('/>')) {
                        // Opening tag
                        const tagName = tag.match(/<([\w-]+)/)?.[1];
                        if (tagName && !['br', 'hr', 'img', 'input', 'meta', 'link'].includes(tagName.toLowerCase())) {
                            openTags.push(tagName);
                        }
                    }
                });
            }
        });

        // Check for unclosed tags
        openTags.forEach(tag => {
            problems.push({
                type: 'error',
                message: `Unclosed tag '<${tag}>'`,
                file: activeTab.name,
                line: lines.length,
                column: 1
            });
        });
    }

    renderProblems();
    updateStatusBarProblems();
}

function renderProblems() {
    const problemsList = document.getElementById('problems-list');
    if (!problemsList) return;

    problemsList.innerHTML = '';

    if (problems.length === 0) {
        problemsList.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--vscode-panel-fg); opacity: 0.7;">No problems found</div>';
        return;
    }

    problems.forEach(problem => {
        const problemEl = document.createElement('div');
        problemEl.className = `problem-item problem-${problem.type}`;

        let iconClass = 'fa-solid fa-circle-info';
        if (problem.type === 'error') iconClass = 'fa-solid fa-circle-xmark';
        if (problem.type === 'warning') iconClass = 'fa-solid fa-triangle-exclamation';

        problemEl.innerHTML = `
            <div class="problem-icon"><i class="${iconClass}"></i></div>
            <div class="problem-details">
                <div class="problem-message">${problem.message}</div>
                <div class="problem-location">${problem.file}:${problem.line}:${problem.column}</div>
            </div>
        `;

        problemEl.addEventListener('click', () => {
            // Navigate to the problem location
            const pane = editorPanes.find(p => p.id === activePaneId);
            if (pane && pane.editor) {
                pane.editor.revealLine(problem.line);
                pane.editor.setPosition({ lineNumber: problem.line, column: problem.column });
                pane.editor.focus();
            }
        });

        problemsList.appendChild(problemEl);
    });
}

function updateStatusBarProblems() {
    const statusItem = document.querySelector('.status-item:nth-child(3)');
    if (statusItem) {
        const errors = problems.filter(p => p.type === 'error').length;
        const warnings = problems.filter(p => p.type === 'warning').length;
        statusItem.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${errors} <i class="fa-solid fa-triangle-exclamation"></i> ${warnings}`;
    }
}

function logOutput(message, type = 'info') {
    const outputList = document.getElementById('output-list');
    if (!outputList) return;

    const timestamp = new Date().toLocaleTimeString();
    const outputLine = document.createElement('div');
    outputLine.className = `output-line output-${type}`;
    outputLine.innerHTML = `[${timestamp}] ${message}`;
    outputList.appendChild(outputLine);

    // Auto-scroll to bottom
    outputList.scrollTop = outputList.scrollHeight;
}

function clearOutput() {
    const outputList = document.getElementById('output-list');
    if (outputList) {
        outputList.innerHTML = '';
    }
}

function processCommand(cmd, outputEl) {
    const args = cmd.split(' ');
    const command = args[0].toLowerCase();
    const outputDiv = document.createElement('div');
    outputDiv.className = 'terminal-command';
    outputDiv.style.marginBottom = '5px';

    if (command === 'help') {
        outputDiv.innerHTML = `Available commands:<br>
        <span class="terminal-success">help</span>     - Show this message<br>
        <span class="terminal-success">clear</span>    - Clear the terminal<br>
        <span class="terminal-success">echo</span>     - Print text to the terminal<br>
        <span class="terminal-success">ls</span>       - List files in current directory<br>
        <span class="terminal-success">pwd</span>      - Print working directory<br>
        <span class="terminal-success">cd</span>       - Change directory<br>
        <span class="terminal-success">cat</span>      - Display file contents<br>
        <span class="terminal-success">mkdir</span>    - Create directory<br>
        <span class="terminal-success">touch</span>    - Create file<br>
        <span class="terminal-success">node</span>     - Run Node.js<br>
        <span class="terminal-success">npm</span>      - Run npm commands<br>
        <span class="terminal-success">git</span>      - Git commands<br>
        <span class="terminal-success">python</span>   - Run Python<br>
        <span class="terminal-success">code</span>     - VS Code commands`;
    } else if (command === 'clear') {
        outputEl.innerHTML = '';
        return;
    } else if (command === 'echo') {
        outputDiv.textContent = args.slice(1).join(' ');
    } else if (command === 'ls' || command === 'dir') {
        const files = getAllFiles(fileSystem).filter(f => f.path.startsWith(currentDirectory));
        const displayFiles = files.map(f => f.name).join('  ');
        outputDiv.textContent = displayFiles || 'No files found';
    } else if (command === 'pwd') {
        outputDiv.textContent = currentDirectory;
    } else if (command === 'cd') {
        const newDir = args[1];
        if (newDir === '..') {
            const parts = currentDirectory.split('/').filter(p => p);
            parts.pop();
            currentDirectory = '/' + parts.join('/');
        } else if (newDir) {
            currentDirectory = newDir.startsWith('/') ? newDir : currentDirectory + '/' + newDir;
        }
        outputDiv.textContent = '';
    } else if (command === 'cat') {
        const filename = args[1];
        if (filename) {
            const file = getAllFiles(fileSystem).find(f => f.name === filename);
            if (file) {
                outputDiv.textContent = file.content;
            } else {
                outputDiv.innerHTML = `<span class="terminal-error">cat: ${filename}: No such file or directory</span>`;
            }
        }
    } else if (command === 'mkdir') {
        const dirname = args[1];
        if (dirname) {
            const newFolder = {
                id: Date.now().toString(),
                name: dirname,
                type: 'folder',
                expanded: false,
                children: []
            };
            if (!fileSystem.children) fileSystem.children = [];
            fileSystem.children.push(newFolder);
            saveFileSystemToStorage();
            renderExplorer();
            outputDiv.textContent = '';
        }
    } else if (command === 'touch') {
        const filename = args[1];
        if (filename) {
            const language = getLanguageFromExtension(filename);
            const newFile = {
                id: Date.now().toString(),
                name: filename,
                type: 'file',
                language: language,
                content: ''
            };
            if (!fileSystem.children) fileSystem.children = [];
            fileSystem.children.push(newFile);
            saveFileSystemToStorage();
            renderExplorer();
            outputDiv.textContent = '';
        }
    } else if (command === 'node') {
        if (args[1] === '-v') {
            outputDiv.textContent = 'v18.17.0';
        } else if (args[1] && args[1].endsWith('.js')) {
            outputDiv.innerHTML = `<span class="terminal-success">Running ${args[1]}...</span><br>Console output would appear here`;
        } else {
            outputDiv.innerHTML = `<span class="terminal-error">Usage: node [options] [ script.js ]</span>`;
        }
    } else if (command === 'npm') {
        if (args[1] === 'install') {
            outputDiv.innerHTML = `<span class="terminal-success">npm install</span><br>Installing dependencies...<br>Done in 2.3s`;
        } else if (args[1] === 'start') {
            outputDiv.innerHTML = `<span class="terminal-success">npm start</span><br>Starting development server...<br>Server running on http://localhost:3000`;
        } else {
            outputDiv.innerHTML = `<span class="terminal-error">npm: Unknown command '${args[1]}'</span>`;
        }
    } else if (command === 'git') {
        if (args[1] === 'status') {
            outputDiv.innerHTML = `On branch main<br>Changes to be committed:<br>  <span class="terminal-success">modified:   index.html</span><br>  <span class="terminal-success">modified:   script.js</span>`;
        } else if (args[1] === 'add') {
            outputDiv.innerHTML = `<span class="terminal-success">git add ${args[2] || '.'}</span>`;
        } else if (args[1] === 'commit') {
            outputDiv.innerHTML = `<span class="terminal-success">git commit -m "${args.slice(3).join(' ')}"</span><br>[main abc1234] ${args.slice(3).join(' ')}<br> 2 files changed, 15 insertions(+)`;
        } else {
            outputDiv.innerHTML = `<span class="terminal-error">git: '${args[1]}' is not a git command</span>`;
        }
    } else if (command === 'python' || command === 'python3') {
        if (args[1] === '--version') {
            outputDiv.textContent = 'Python 3.11.5';
        } else if (args[1] && args[1].endsWith('.py')) {
            outputDiv.innerHTML = `<span class="terminal-success">Running ${args[1]}...</span><br>Hello from Python!`;
        } else {
            outputDiv.innerHTML = `<span class="terminal-error">python: can't open file '${args[1] || ''}': No such file or directory</span>`;
        }
    } else if (command === 'code') {
        if (args[1] === '--version') {
            outputDiv.textContent = '1.80.0';
        } else if (args[1] === '--help') {
            outputDiv.innerHTML = `Visual Studio Code Clone<br><br>Usage: code [options] [file ...]<br><br>Options:<br>  --version  Print version<br>  --help     Print this message`;
        } else {
            outputDiv.innerHTML = `<span class="terminal-error">code: Unknown option '${args[1]}'</span>`;
        }
    } else {
        outputDiv.innerHTML = `<span class="terminal-error">${escapeHtml(command)} : The term '${escapeHtml(command)}' is not recognized as the name of a cmdlet, function, script file, or operable program.</span>`;
    }

    if (outputDiv.innerHTML || outputDiv.textContent) {
        outputEl.appendChild(outputDiv);
    }
}

function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// --- Activity Bar ---
function initActivityBar() {
    const activityIcons = document.querySelectorAll('.activity-icon');
    const sidebarPanels = document.querySelectorAll('.sidebar-panel');
    const mainSidebar = document.querySelector('.sidebar');

    activityIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            activityIcons.forEach(i => i.classList.remove('active'));
            icon.classList.add('active');
            
            const panel = icon.getAttribute('data-panel');
            
            // Hide all panels
            sidebarPanels.forEach(p => p.style.display = 'none');
            mainSidebar.style.display = 'none';
            
            if (panel === 'explorer') {
                mainSidebar.style.display = 'flex';
                renderExplorer();
            } else if (panel === 'search') {
                mainSidebar.style.display = 'flex';
                renderSearchPanel();
            } else if (panel === 'source-control') {
                document.getElementById('source-control-panel').style.display = 'flex';
            } else if (panel === 'extensions') {
                document.getElementById('extensions-panel').style.display = 'flex';
            } else if (panel === 'outline') {
                document.getElementById('outline-panel').style.display = 'flex';
                updateOutline();
            } else if (panel === 'settings') {
                document.getElementById('settings-panel').style.display = 'flex';
            } else {
                // For other panels, show main sidebar with placeholder
                mainSidebar.style.display = 'flex';
                const sidebarContent = document.getElementById('sidebar-content');
                sidebarContent.innerHTML = `<div style="padding: 20px; text-align: center; color: #858585;">
                    <i class="${icon.querySelector('i').className}" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>
                    <p>This is the mock ${panel} panel.</p>
                </div>`;
            }
        });
    });
}

// --- Context Menu ---
function initContextMenu() {
    const contextMenu = document.createElement('div');
    contextMenu.className = 'context-menu';
    contextMenu.innerHTML = `
        <div class="context-item" id="ctx-new-file">New File</div>
        <div class="context-item" id="ctx-new-folder">New Folder</div>
        <div class="context-separator"></div>
        <div class="context-item" id="ctx-delete">Delete</div>
    `;
    document.body.appendChild(contextMenu);

    let activeNodeForContext = null;

    document.getElementById('sidebar-content').addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const row = e.target.closest('.tree-node-row');
        if (row) {
            document.querySelectorAll('.tree-node-row').forEach(r => r.classList.remove('active'));
            row.classList.add('active');
            const nameNode = row.querySelector('span');
            if (nameNode) {
                 activeNodeForContext = findNodeByName(fileSystem, nameNode.textContent);
            }
        } else {
            activeNodeForContext = fileSystem;
        }

        contextMenu.style.display = 'block';
        contextMenu.style.left = e.pageX + 'px';
        contextMenu.style.top = e.pageY + 'px';
    });

    document.addEventListener('click', () => {
        contextMenu.style.display = 'none';
        document.querySelectorAll('.tree-node-row').forEach(r => r.classList.remove('active'));
    });

    document.getElementById('ctx-new-file').addEventListener('click', () => {
        const name = prompt("Enter file name (e.g., test.js):");
        if (name && activeNodeForContext) {
            const parent = activeNodeForContext.type === 'folder' ? activeNodeForContext : fileSystem;
            if(!parent.children) parent.children = [];
            parent.children.push({
                id: Date.now().toString(), name: name, type: 'file', content: ''
            });
            renderExplorer();
        }
    });

    document.getElementById('ctx-delete').addEventListener('click', () => {
        if (activeNodeForContext && activeNodeForContext.id !== 'root') {
            if (confirm(`Delete '${activeNodeForContext.name}'?`)) {
                removeNode(fileSystem, activeNodeForContext.id);
                closeTab(activeNodeForContext.id);
                renderExplorer();
            }
        }
    });
}

function findNodeByName(node, name) {
    if (node.name === name) return node;
    if (node.children) {
        for (let child of node.children) {
            const found = findNodeByName(child, name);
            if (found) return found;
        }
    }
    return null;
}

function removeNode(parent, id) {
    if (parent.children) {
        const index = parent.children.findIndex(c => c.id === id);
        if (index > -1) {
            parent.children.splice(index, 1);
            return true;
        }
        for (let child of parent.children) {
            if (removeNode(child, id)) return true;
        }
    }
    return false;
}

// --- Keyboard Shortcuts ---
function initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key.toLowerCase()) {
                case 's':
                    e.preventDefault();
                    saveCurrentFile();
                    break;
                case 'n':
                    if (e.shiftKey) {
                        e.preventDefault();
                        // New window
                        showNotification('New window would open here');
                    } else {
                        e.preventDefault();
                        newFile();
                    }
                    break;
                case 'o':
                    e.preventDefault();
                    // Open file dialog would go here
                    break;
                case 'p':
                    if (e.shiftKey) {
                        e.preventDefault();
                        showCommandPalette();
                    } else {
                        e.preventDefault();
                        showGoToFile();
                    }
                    break;
                case 'f':
                    if (e.shiftKey) {
                        e.preventDefault();
                        showFindReplace();
                    } else {
                        e.preventDefault();
                        showFind();
                    }
                    break;
                case 'h':
                    e.preventDefault();
                    showFindReplace();
                    break;
                case 'k':
                    if (e.shiftKey) {
                        e.preventDefault();
                        showKeyboardShortcuts();
                    } else if (e.ctrlKey && !e.shiftKey) {
                        // Ctrl+K (waiting for next key)
                        e.preventDefault();
                        // Could implement Ctrl+K Ctrl+C for comment, etc.
                    }
                    break;
                case '\`':
                    e.preventDefault();
                    toggleTerminal();
                    break;
                case 'b':
                    if (e.shiftKey) {
                        e.preventDefault();
                        toggleSidebar();
                    } else {
                        e.preventDefault();
                        toggleZenMode();
                    }
                    break;
                case 'j':
                    if (e.shiftKey) {
                        e.preventDefault();
                        toggleBottomPanel();
                    }
                    break;
            }
        }
    });
}

function handleGlobalKeydown(e) {
    if (e.key === 'F1') {
        e.preventDefault();
        showCommandPalette();
    } else if (e.key === 'Escape') {
        hideCommandPalette();
        hideFindReplace();
    } else if (e.key === ' ') {
        // Trigger suggestions on space in certain contexts
        if (editor) {
            const position = editor.getPosition();
            const lineContent = editor.getModel().getLineContent(position.lineNumber);
            const beforeCursor = lineContent.substring(0, position.column - 1);

            // Trigger suggestions for HTML tags
            if (beforeCursor.endsWith('<') && editor.getModel().getLanguageId() === 'html') {
                setTimeout(() => editor.trigger('', 'editor.action.triggerSuggest'), 10);
            }
            // Trigger suggestions for CSS properties
            else if (beforeCursor.match(/\w+$/) && editor.getModel().getLanguageId() === 'css') {
                setTimeout(() => editor.trigger('', 'editor.action.triggerSuggest'), 10);
            }
            // Trigger suggestions for JavaScript
            else if (editor.getModel().getLanguageId() === 'javascript') {
                setTimeout(() => editor.trigger('', 'editor.action.triggerSuggest'), 10);
            }
        }
    }
}

// Add the global keydown listener
document.addEventListener('keydown', handleGlobalKeydown);

// --- Command Palette ---
let commandPaletteVisible = false;
const commands = [
    { label: 'File: New File', shortcut: 'Ctrl+N', action: () => newFile() },
    { label: 'File: Save', shortcut: 'Ctrl+S', action: () => saveCurrentFile() },
    { label: 'View: Toggle Terminal', shortcut: 'Ctrl+`', action: () => toggleTerminal() },
    { label: 'View: Toggle Sidebar', shortcut: 'Ctrl+B', action: () => toggleSidebar() },
    { label: 'View: Toggle Bottom Panel', shortcut: 'Ctrl+Shift+J', action: () => toggleBottomPanel() },
    { label: 'View: Command Palette', shortcut: 'Ctrl+Shift+P', action: () => showCommandPalette() },
    { label: 'View: Split Editor Right', action: () => splitEditor('vertical') },
    { label: 'View: Split Editor Down', action: () => splitEditor('horizontal') },
    { label: 'Edit: Find', shortcut: 'Ctrl+F', action: () => showFind() },
    { label: 'Edit: Replace', shortcut: 'Ctrl+H', action: () => showFindReplace() },
    { label: 'Terminal: Clear', action: () => clearTerminal() },
    { label: 'Explorer: New Folder', action: () => newFolder() },
    { label: 'Preferences: Color Theme', action: () => showThemePicker() },
    { label: 'View: Toggle Zen Mode', shortcut: 'Ctrl+B', action: () => toggleZenMode() },
    { label: 'Help: Keyboard Shortcuts', shortcut: 'Ctrl+K Ctrl+S', action: () => showKeyboardShortcuts() },
    { label: 'View: Zoom In', shortcut: 'Ctrl+=', action: () => { if(editor) editor.trigger('', 'editor.action.fontZoomIn'); } },
    { label: 'View: Zoom Out', shortcut: 'Ctrl+-', action: () => { if(editor) editor.trigger('', 'editor.action.fontZoomOut'); } },
    { label: 'Edit: Toggle Line Comment', shortcut: 'Ctrl+/', action: () => { if(editor) editor.trigger('', 'editor.action.commentLine'); } },
    { label: 'Edit: Format Document', shortcut: 'Shift+Alt+F', action: () => { if(editor) editor.trigger('', 'editor.action.formatDocument'); } },
    { label: 'Go: Go to File', shortcut: 'Ctrl+P', action: () => showGoToFile() },
    { label: 'Go: Go to Symbol', shortcut: 'Ctrl+Shift+O', action: () => showGoToSymbol() },
    { label: 'Go: Go to Line', shortcut: 'Ctrl+G', action: () => showGoToLine() }
];

function showCommandPalette() {
    if (commandPaletteVisible) return;

    const palette = document.createElement('div');
    palette.className = 'command-palette';
    palette.innerHTML = `
        <div class="command-input-container">
            <i class="codicon codicon-search"></i>
            <input type="text" id="command-input" placeholder="Type a command or search..." autocomplete="off">
        </div>
        <div class="command-results" id="command-results"></div>
    `;
    document.body.appendChild(palette);

    const input = document.getElementById('command-input');
    const results = document.getElementById('command-results');

    input.focus();
    commandPaletteVisible = true;

    function updateResults() {
        const query = input.value.toLowerCase();
        const filtered = commands.filter(cmd =>
            cmd.label.toLowerCase().includes(query)
        );

        results.innerHTML = '';
        filtered.slice(0, 10).forEach((cmd, index) => {
            const item = document.createElement('div');
            item.className = 'command-item';
            if (index === 0) item.classList.add('selected');
            item.innerHTML = `
                <span>${cmd.label}</span>
                ${cmd.shortcut ? `<span class="command-shortcut">${cmd.shortcut}</span>` : ''}
            `;
            item.addEventListener('click', () => {
                cmd.action();
                hideCommandPalette();
            });
            results.appendChild(item);
        });
    }

    input.addEventListener('input', updateResults);
    input.addEventListener('keydown', (e) => {
        const items = results.querySelectorAll('.command-item');
        const selected = results.querySelector('.command-item.selected');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (selected) {
                selected.classList.remove('selected');
                const next = selected.nextElementSibling || items[0];
                next.classList.add('selected');
                next.scrollIntoView({ block: 'nearest' });
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (selected) {
                selected.classList.remove('selected');
                const prev = selected.previousElementSibling || items[items.length - 1];
                prev.classList.add('selected');
                prev.scrollIntoView({ block: 'nearest' });
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selected) {
                const index = Array.from(items).indexOf(selected);
                if (commands[index]) {
                    commands[index].action();
                    hideCommandPalette();
                }
            }
        } else if (e.key === 'Escape') {
            hideCommandPalette();
        }
    });

    updateResults();
}

function hideCommandPalette() {
    const palette = document.querySelector('.command-palette');
    if (palette) {
        palette.remove();
        commandPaletteVisible = false;
    }
}

// --- Panel Toggle Functions ---
function toggleTerminal() {
    const panel = document.getElementById('bottom-panel');
    const terminalTab = document.querySelector('.panel-tab:nth-child(4)');
    if (panel && terminalTab) {
        if (panel.style.display === 'none') {
            panel.style.display = 'flex';
            // Switch to terminal tab
            document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
            terminalTab.classList.add('active');
            // Switch content to terminal
            const content = document.getElementById('panel-content');
            content.innerHTML = `
                <div id="terminal-output"></div>
                <div class="terminal-input-line">
                    <span class="prompt">PS C:\\User\\Dev></span>
                    <input type="text" id="terminal-input" autocomplete="off" spellcheck="false" autofocus>
                </div>
            `;
            initTerminal();
        } else {
            panel.style.display = 'none';
        }
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'flex';
    } else {
        sidebar.style.display = 'none';
    }
}

function toggleBottomPanel() {
    const panel = document.getElementById('bottom-panel');
    if (panel.style.display === 'none') {
        panel.style.display = 'flex';
    } else {
        panel.style.display = 'none';
    }
}

function clearTerminal() {
    const output = document.getElementById('terminal-output');
    if (output) output.innerHTML = '';
}

// --- Find and Replace ---
function showFind() {
    if (!editor) return;
    editor.getAction('actions.find').run();
}

function showFindReplace() {
    if (!editor) return;
    editor.getAction('editor.action.startFindReplaceAction').run();
}

function hideFindReplace() {
    // Monaco handles this internally
}

// --- Theme Picker ---
function showThemePicker() {
    const themePicker = document.getElementById('theme-picker');
    themePicker.style.display = 'block';
}

function hideThemePicker() {
    const themePicker = document.getElementById('theme-picker');
    themePicker.style.display = 'none';
}

// --- Dropdown Menus ---
const menuData = {
    'menu-file': [
        { label: 'New File...', shortcut: 'Ctrl+N', action: () => newFile() },
        { label: 'New Folder...', action: () => newFolder() },
        { type: 'separator' },
        { label: 'Save', shortcut: 'Ctrl+S', action: () => saveCurrentFile() },
        { label: 'Save As...', action: () => saveCurrentFile() },
        { type: 'separator' },
        { label: 'Exit', action: () => window.close() }
    ],
    'menu-edit': [
        { label: 'Undo', shortcut: 'Ctrl+Z', action: () => editor && editor.getAction('undo').run() },
        { label: 'Redo', shortcut: 'Ctrl+Y', action: () => editor && editor.getAction('redo').run() },
        { type: 'separator' },
        { label: 'Find', shortcut: 'Ctrl+F', action: () => showFind() },
        { label: 'Replace', shortcut: 'Ctrl+H', action: () => showFindReplace() },
        { type: 'separator' },
        { label: 'Find in Files', shortcut: 'Ctrl+Shift+F', action: () => showSearchInFiles() }
    ],
    'menu-selection': [
        { label: 'Select All', shortcut: 'Ctrl+A', action: () => editor && editor.getAction('editor.action.selectAll').run() },
        { label: 'Expand Selection', shortcut: 'Shift+Alt+Right', action: () => editor && editor.getAction('editor.action.smartSelect.expand').run() },
        { label: 'Shrink Selection', shortcut: 'Shift+Alt+Left', action: () => editor && editor.getAction('editor.action.smartSelect.shrink').run() }
    ],
    'menu-view': [
        { label: 'Command Palette...', shortcut: 'Ctrl+Shift+P', action: () => showCommandPalette() },
        { type: 'separator' },
        { label: 'Explorer', shortcut: 'Ctrl+Shift+E', action: () => { document.querySelector('[data-panel="explorer"]').click(); } },
        { label: 'Search', shortcut: 'Ctrl+Shift+F', action: () => { document.querySelector('[data-panel="search"]').click(); } },
        { label: 'Source Control', shortcut: 'Ctrl+Shift+G', action: () => { document.querySelector('[data-panel="source-control"]').click(); } },
        { label: 'Run and Debug', shortcut: 'Ctrl+Shift+D', action: () => { document.querySelector('[data-panel="run-debug"]').click(); } },
        { label: 'Extensions', shortcut: 'Ctrl+Shift+X', action: () => { document.querySelector('[data-panel="extensions"]').click(); } },
        { type: 'separator' },
        { label: 'Color Theme', action: () => showThemePicker() },
        { type: 'separator' },
        { label: 'Terminal', shortcut: 'Ctrl+`', action: () => toggleTerminal() },
        { type: 'separator' },
        { label: 'Toggle Sidebar', shortcut: 'Ctrl+B', action: () => toggleSidebar() }
    ],
    'menu-go': [
        { label: 'Back', shortcut: 'Alt+Left', action: () => {} },
        { label: 'Forward', shortcut: 'Alt+Right', action: () => {} },
        { type: 'separator' },
        { label: 'Go to File...', shortcut: 'Ctrl+P', action: () => showGoToFile() },
        { label: 'Go to Symbol...', shortcut: 'Ctrl+Shift+O', action: () => showGoToSymbol() },
        { label: 'Go to Line/Column...', shortcut: 'Ctrl+G', action: () => showGoToLine() }
    ],
    'menu-run': [
        { label: 'Start Debugging', shortcut: 'F5', action: () => startDebugging() },
        { label: 'Run Without Debugging', shortcut: 'Ctrl+F5', action: () => runWithoutDebugging() },
        { label: 'Stop Debugging', shortcut: 'Shift+F5', action: () => stopDebugging() },
        { type: 'separator' },
        { label: 'Open Configurations', action: () => openDebugConfigurations() }
    ],
    'menu-terminal': [
        { label: 'New Terminal', shortcut: 'Ctrl+Shift+`', action: () => newTerminal() },
        { label: 'Split Terminal', action: () => splitTerminal() },
        { type: 'separator' },
        { label: 'Run Task...', action: () => runTask() },
        { label: 'Configure Tasks...', action: () => configureTasks() }
    ],
    'menu-help': [
        { label: 'Welcome', action: () => showWelcome() },
        { label: 'Show All Commands', shortcut: 'F1', action: () => showCommandPalette() },
        { type: 'separator' },
        { label: 'Documentation', action: () => openDocumentation() },
        { label: 'Release Notes', action: () => openReleaseNotes() },
        { type: 'separator' },
        { label: 'About', action: () => showAbout() }
    ]
};

function initDropdowns() {
    const menuItems = document.querySelectorAll('.title-bar-menu .menu-item');
    let activeDropdown = null;

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const menuId = item.id;
            if (activeDropdown && activeDropdown.id === `dropdown-${menuId}`) {
                closeDropdown();
            } else {
                showDropdown(item, menuId);
            }
        });

        item.addEventListener('mouseenter', () => {
            if (activeDropdown) {
                showDropdown(item, item.id);
            }
        });
    });

    document.addEventListener('click', closeDropdown);

    function showDropdown(anchor, menuId) {
        closeDropdown();
        const data = menuData[menuId];
        if (!data) return;

        anchor.classList.add('active');
        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown-menu active';
        dropdown.id = `dropdown-${menuId}`;
        
        const rect = anchor.getBoundingClientRect();
        dropdown.style.left = rect.left + 'px';

        data.forEach(entry => {
            if (entry.type === 'separator') {
                const sep = document.createElement('div');
                sep.className = 'dropdown-separator';
                dropdown.appendChild(sep);
            } else {
                const row = document.createElement('div');
                row.className = 'dropdown-item';
                row.innerHTML = `<span>${entry.label}</span>${entry.shortcut ? `<span class="shortcut">${entry.shortcut}</span>` : ''}`;
                row.addEventListener('click', () => {
                    if (entry.action) entry.action();
                    closeDropdown();
                });
                dropdown.appendChild(row);
            }
        });

        document.body.appendChild(dropdown);
        activeDropdown = dropdown;
    }

    function closeDropdown() {
        if (activeDropdown) {
            activeDropdown.remove();
            activeDropdown = null;
        }
        document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    }
}

// --- Additional Menu Action Functions ---
function showSearchInFiles() {
    // Switch to search panel
    document.querySelector('[data-panel="search"]').click();
}

function showGoToFile() {
    // Quick open file dialog
    const files = getAllFiles(fileSystem);
    showQuickOpen(files, (file) => openFile(file));
}

function showGoToSymbol() {
    if (!editor) return;
    editor.getAction('editor.action.quickOutline').run();
}

function showGoToLine() {
    if (!editor) return;
    editor.getAction('editor.action.gotoLine').run();
}

function startDebugging() {
    // Switch to run and debug panel
    document.querySelector('[data-panel="run-debug"]').click();
    addTerminalOutput('Starting debugger...\n');
}

function runWithoutDebugging() {
    addTerminalOutput('Running without debugging...\n');
}

function stopDebugging() {
    addTerminalOutput('Stopping debugger...\n');
}

function openDebugConfigurations() {
    // Open launch.json or create one
    const config = {
        id: 'launch.json',
        name: 'launch.json',
        type: 'file',
        language: 'json',
        content: JSON.stringify({
            "version": "0.2.0",
            "configurations": [
                {
                    "name": "Launch",
                    "type": "node",
                    "request": "launch",
                    "program": "${workspaceFolder}/index.js",
                    "skipFiles": ["<node_internals>/**"]
                }
            ]
        }, null, 4)
    };
    openFile(config);
}

function newTerminal() {
    toggleTerminal();
}

function splitTerminal() {
    // For now, just show terminal
    toggleTerminal();
}

function runTask() {
    showCommandPalette();
}

function configureTasks() {
    // Open tasks.json
    const tasks = {
        id: 'tasks.json',
        name: 'tasks.json',
        type: 'file',
        language: 'json',
        content: JSON.stringify({
            "version": "2.0.0",
            "tasks": [
                {
                    "label": "build",
                    "type": "shell",
                    "command": "npm",
                    "args": ["run", "build"],
                    "group": "build"
                }
            ]
        }, null, 4)
    };
    openFile(tasks);
}

function showWelcome() {
    const welcome = {
        id: 'welcome',
        name: 'Welcome',
        type: 'welcome',
        language: 'plaintext',
        content: ''
    };
    openFile(welcome);
}

function openFileByName(name) {
    const node = findNodeByName(fileSystem, name);
    if (node) {
        openFile(node);
    }
}

function openDocumentation() {
    window.open('https://code.visualstudio.com/docs', '_blank');
}

function openReleaseNotes() {
    window.open('https://code.visualstudio.com/updates', '_blank');
}

function showAbout() {
    alert('VS Code Clone\\nVersion 1.0.0\\nA web-based code editor inspired by Visual Studio Code');
}

// --- Utility Functions ---
function getAllFiles(node, path = '') {
    let files = [];
    if (node.type === 'file') {
        files.push({ ...node, path: path + node.name });
    } else if (node.children) {
        node.children.forEach(child => {
            files = files.concat(getAllFiles(child, path + node.name + '/'));
        });
    }
    return files;
}

function showQuickOpen(items, callback) {
    const quickOpen = document.createElement('div');
    quickOpen.className = 'quick-open';
    quickOpen.innerHTML = `
        <div class="quick-input-container">
            <i class="codicon codicon-search"></i>
            <input type="text" id="quick-input" placeholder="Search files by name..." autocomplete="off">
        </div>
        <div class="quick-results" id="quick-results"></div>
    `;
    document.body.appendChild(quickOpen);

    const input = document.getElementById('quick-input');
    const results = document.getElementById('quick-results');

    input.focus();

    function updateResults() {
        const query = input.value.toLowerCase();
        const filtered = items.filter(item =>
            item.name.toLowerCase().includes(query)
        );

        results.innerHTML = '';
        filtered.slice(0, 10).forEach((item, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'quick-item';
            if (index === 0) resultItem.classList.add('selected');
            resultItem.innerHTML = `
                <i class="codicon codicon-file"></i>
                <span>${item.name}</span>
                <span class="quick-path">${item.path || ''}</span>
            `;
            resultItem.addEventListener('click', () => {
                callback(item);
                quickOpen.remove();
            });
            results.appendChild(resultItem);
        });
    }

    input.addEventListener('input', updateResults);
    input.addEventListener('keydown', (e) => {
        const resultItems = results.querySelectorAll('.quick-item');
        const selected = results.querySelector('.quick-item.selected');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (selected) {
                selected.classList.remove('selected');
                const next = selected.nextElementSibling || resultItems[0];
                next.classList.add('selected');
                next.scrollIntoView({ block: 'nearest' });
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (selected) {
                selected.classList.remove('selected');
                const prev = selected.previousElementSibling || resultItems[resultItems.length - 1];
                prev.classList.add('selected');
                prev.scrollIntoView({ block: 'nearest' });
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selected) {
                const index = Array.from(resultItems).indexOf(selected);
                if (filtered[index]) {
                    callback(filtered[index]);
                    quickOpen.remove();
                }
            }
        } else if (e.key === 'Escape') {
            quickOpen.remove();
        }
    });

    updateResults();
}

function addTerminalOutput(text) {
    const output = document.getElementById('terminal-output');
    if (output) {
        output.innerHTML += text;
        const panelContent = document.getElementById('panel-content');
        if (panelContent) panelContent.scrollTop = panelContent.scrollHeight;
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type} fade-in`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// --- New Panel Functions ---
function updateOutline() {
    const outlineContent = document.getElementById('outline-content');
    if (!editor) return;
    
    const model = editor.getModel();
    if (!model) return;
    
    const symbols = monaco.languages.typescript.getTypeScriptWorker()
        .then(worker => worker(model.uri))
        .then(client => client.getNavigationTree(model.uri.toString()))
        .then(tree => {
            outlineContent.innerHTML = '';
            if (tree && tree.childItems) {
                tree.childItems.forEach(item => {
                    const outlineItem = document.createElement('div');
                    outlineItem.className = 'outline-item';
                    outlineItem.innerHTML = `
                        <i class="codicon codicon-symbol-${getSymbolIcon(item.kind)}"></i>
                        <span>${item.text}</span>
                    `;
                    outlineItem.addEventListener('click', () => {
                        const range = item.spans[0];
                        editor.revealRangeInCenter({
                            startLineNumber: range.start.line + 1,
                            startColumn: range.start.offset + 1,
                            endLineNumber: range.end.line + 1,
                            endColumn: range.end.offset + 1
                        });
                        editor.setPosition({
                            lineNumber: range.start.line + 1,
                            column: range.start.offset + 1
                        });
                    });
                    outlineContent.appendChild(outlineItem);
                });
            }
        })
        .catch(() => {
            // Fallback to basic outline
            outlineContent.innerHTML = `
                <div class="outline-item" data-type="function">
                    <i class="codicon codicon-symbol-function"></i>
                    <span>init()</span>
                </div>
                <div class="outline-item" data-type="variable">
                    <i class="codicon codicon-symbol-variable"></i>
                    <span>editor</span>
                </div>
            `;
        });
}

function getSymbolIcon(kind) {
    const iconMap = {
        'function': 'function',
        'var': 'variable',
        'let': 'variable',
        'const': 'constant',
        'class': 'class',
        'interface': 'interface',
        'method': 'method',
        'property': 'property'
    };
    return iconMap[kind] || 'variable';
}

function toggleZenMode() {
    document.body.classList.toggle('zen-mode');
    showNotification('Zen mode ' + (document.body.classList.contains('zen-mode') ? 'enabled' : 'disabled'));
}

function showKeyboardShortcuts() {
    document.getElementById('shortcuts-modal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// --- Panel Toggle Functions ---
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarPanels = document.querySelectorAll('.sidebar-panel');
    const isVisible = sidebar.style.display !== 'none' || 
                     Array.from(sidebarPanels).some(p => p.style.display !== 'none');
    
    if (isVisible) {
        sidebar.style.display = 'none';
        sidebarPanels.forEach(p => p.style.display = 'none');
    } else {
        sidebar.style.display = 'flex';
    }
}

function toggleBottomPanel() {
    const panel = document.getElementById('bottom-panel');
    panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
}

function toggleTerminal() {
    const terminalTab = Array.from(document.querySelectorAll('.panel-tab'))
        .find(tab => tab.textContent.toLowerCase() === 'terminal');
    if (terminalTab) {
        terminalTab.click();
        const panel = document.getElementById('bottom-panel');
        panel.style.display = 'flex';
    }
}

// Enhanced panel tab switching
function initPanelTabs() {
    const panelTabs = document.querySelectorAll('.panel-tab');
    const panelContents = document.querySelectorAll('.panel-content');

    panelTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            panelTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const tabName = tab.textContent.toLowerCase().replace(' ', '-');
            panelContents.forEach(content => {
                content.style.display = content.id === `${tabName}-content` ? 'block' : 'none';
            });
        });
    });
}

// Enhanced keyboard shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch (e.key.toLowerCase()) {
                case 'k':
                    if (e.shiftKey) {
                        e.preventDefault();
                        showKeyboardShortcuts();
                    }
                    break;
                case 'b':
                    e.preventDefault();
                    toggleZenMode();
                    break;
                case 'shift':
                    // Handle Ctrl+Shift combinations
                    break;
            }
        }
    });
}

function switchTheme(theme) {
  // 1. Update Monaco Editor Workspace Theme
  if (editor) {
    monaco.editor.setTheme(theme);
  }
  // 2. Update Globals via DOM Style Property Rules
  const root = document.documentElement;
  if (theme === 'vs-light') {
    root.style.setProperty('--vscode-editor-background', '#ffffff');
    root.style.setProperty('--vscode-editor-foreground', '#000000');
    root.style.setProperty('--vscode-activityBar-background', '#f3f3f3');
    root.style.setProperty('--vscode-activityBar-foreground', '#000000');
    root.style.setProperty('--vscode-activityBar-activeBorder', '#007acc');
    root.style.setProperty('--vscode-sideBar-background', '#f3f3f3');
    root.style.setProperty('--vscode-statusBar-background', '#007acc');
    root.style.setProperty('--vscode-statusBar-foreground', '#ffffff');
    root.style.setProperty('--vscode-titleBar-activeBackground', '#dddddd');
    root.style.setProperty('--vscode-titleBar-activeForeground', '#000000');
    root.style.setProperty('--vscode-tab-activeBackground', '#ffffff');
    root.style.setProperty('--vscode-tab-inactiveBackground', '#f3f3f3');
    root.style.setProperty('--vscode-panel-background', '#ffffff');
    root.style.setProperty('--vscode-panel-border', '#e5e5e5');
  } else if (theme === 'hc-black') {
    root.style.setProperty('--vscode-editor-background', '#000000');
    root.style.setProperty('--vscode-editor-foreground', '#ffffff');
    root.style.setProperty('--vscode-activityBar-background', '#000000');
    root.style.setProperty('--vscode-activityBar-foreground', '#ffffff');
    root.style.setProperty('--vscode-activityBar-activeBorder', '#ffffff');
    root.style.setProperty('--vscode-sideBar-background', '#000000');
    root.style.setProperty('--vscode-statusBar-background', '#ffffff');
    root.style.setProperty('--vscode-statusBar-foreground', '#000000');
    root.style.setProperty('--vscode-titleBar-activeBackground', '#000000');
    root.style.setProperty('--vscode-titleBar-activeForeground', '#ffffff');
    root.style.setProperty('--vscode-tab-activeBackground', '#000000');
    root.style.setProperty('--vscode-tab-inactiveBackground', '#000000');
    root.style.setProperty('--vscode-panel-background', '#000000');
    root.style.setProperty('--vscode-panel-border', '#ffffff');
  } else {
    // Default: vs-dark
    root.style.setProperty('--vscode-editor-background', '#1e1e1e');
    root.style.setProperty('--vscode-editor-foreground', '#cccccc');
    root.style.setProperty('--vscode-activityBar-background', '#333333');
    root.style.setProperty('--vscode-activityBar-foreground', '#cccccc');
    root.style.setProperty('--vscode-activityBar-activeBorder', '#007acc');
    root.style.setProperty('--vscode-sideBar-background', '#252526');
    root.style.setProperty('--vscode-statusBar-background', '#007acc');
    root.style.setProperty('--vscode-statusBar-foreground', '#ffffff');
    root.style.setProperty('--vscode-titleBar-activeBackground', '#323233');
    root.style.setProperty('--vscode-titleBar-activeForeground', '#cccccc');
    root.style.setProperty('--vscode-tab-activeBackground', '#1e1e1e');
    root.style.setProperty('--vscode-tab-inactiveBackground', '#2d2d2d');
    root.style.setProperty('--vscode-panel-background', '#1e1e1e');
    root.style.setProperty('--vscode-panel-border', '#3e3e42');
  }
}

// Theme picker functionality
document.addEventListener('DOMContentLoaded', () => {
    const themePicker = document.getElementById('theme-picker');
    const themeItems = document.querySelectorAll('.theme-item');

    themeItems.forEach(item => {
        item.addEventListener('click', () => {
            const theme = item.getAttribute('data-theme');
            switchTheme(theme);
            // Update active class
            themeItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            // Hide picker
            themePicker.style.display = 'none';
        });
    });
});
