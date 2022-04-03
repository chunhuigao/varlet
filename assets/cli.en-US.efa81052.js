import{_ as a}from"./elevation.229458c1.js";import{e as c,o as d,c as r,a as t,i as l,j as o,U as n,m as s}from"./vendor.49f89f0d.js";const i={components:{}},h={class:"varlet-site-doc"},p=n('<h1>Varlet Cli</h1><div class="card"><h3>Intro</h3><p>The out-of-the-box <code>Vue3 component library</code> rapid prototyping tool provides a series of commands and tools to solve the problem of component library development</p></div><div class="card"><h3>Feature</h3><ul><li>\u{1F4E6}Out-of-the-box component library development environment</li><li>\u{1F4E6}Out-of-the-box component library compilation tool, support exporting <code>esm</code> and <code>umd</code> two module codes</li><li>\u{1F6E0}\uFE0FComponent library document site based on configuration files, support Baidu statistics and theme customization</li><li>\u{1F6E0}\uFE0FSupports <code>single file component (sfc)</code> and <code>tsx, jsx</code> two styles of component library writing styles</li><li>\u{1F4E6}Code inspection tool out of the box</li><li>\u{1F4E6}Unit testing tools out of the box</li><li>\u{1F4E6}Out-of-the-box code publishing tool, publish to npm and github, and automatically generate a change log</li><li>\u{1F4AA}Support <code>Typescript</code></li><li>\u{1F4AA}Support <code>Dark Mode</code></li><li>\u{1F680}Based on <code>pnpm</code></li></ul></div>',3),u={class:"card"},m=t("h3",null,"Quickstart",-1),j=t("p",null,[t("code",null,"@varlet/cli"),s(" has built-in "),t("code",null,"single file component (sfc)"),s(" and "),t("code",null,"tsx, jsx"),s(" two styles of component library project templates, which can be directly generated by the "),t("code",null,"gen"),s(" command. To help users directly enter the development of the component itself, it is recommended to use "),t("code",null,"pnpm"),s(" as a package management tool.")],-1),g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-meta"},"#"),t("span",{class:"bash"},[s(" Install "),t("span",{class:"hljs-built_in"},"command"),s(" line tools")]),s(`
pnpm add @varlet/cli -g
`),t("span",{class:"hljs-meta"},"#"),t("span",{class:"bash"},[s(" Use the gen "),t("span",{class:"hljs-built_in"},"command"),s(" to generate the project")]),s(`
varlet-cli gen projectName
cd projectName
pnpm install
pnpm dev
`)])],-1),_=t("p",null,"Then by simply modifying some basic information of the component library template, you can start the development of the component library",-1),b=n('<h2>Advanced customization</h2><div class="card"><h3>Configuration file</h3><p>The <code>varlet.config.js</code> in the project root directory is used to manage the specific details of the entire component library project</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>host</code></td><td>Development server host</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>Development server port</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>name</code></td><td>Full name of the component library</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>Component library namespace, Will be used as a component prefix</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>title</code></td><td>The title of the component library in the document</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>The logo of the component library in the document</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>Document default language</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>useMobile</code></td><td>Whether to display the right mobile phone preview</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>themes</code></td><td>Document themes</td><td><em>SiteThemes</em></td><td><code>-</code></td></tr><tr><td><code>darkThemes</code></td><td>Document dark mode themes</td><td><em>SiteThemes</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>Document code snippet style related</td><td><em>SiteHighlight</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>Document statistics related</td><td><em>SiteAnalysis</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>PC-side document structure configuration</td><td><em>SitePC</em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>Mobile document structure configuration</td><td><em>SiteMobile</em></td><td><code>-</code></td></tr><tr><td><code>moduleCompatible</code></td><td>Module compatible config</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr></tbody></table></div>',2),f={class:"card"},v=t("h3",null,"Module Compatible",-1),y=t("p",null,[s("Some external dependencies may need to be compatible with module syntax to achieve the purpose of compiling correctly to "),t("code",null,"commonjs"),s(" and "),t("code",null,"esmodule"),s(". For example, the wording of "),t("code",null,"esmodule"),s(" of "),t("code",null,"dayjs"),s(" is")],-1),x=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" dayjs "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'dayjs/esm'"),s(`
`)])],-1),w=t("p",null,[s("In order to build "),t("code",null,"commonjs"),s(", the writing method is")],-1),k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" * "),t("span",{class:"hljs-keyword"},"as"),s(" dayjs "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'dayjs'"),s(`
`)])],-1),S=t("p",null,[s("In the project, we embrace the first way of writing the "),t("code",null,"esmodule"),s(" module, and make the following configuration for adaptation")],-1),T=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-comment"},"// varlet.config.js"),s(`
`),t("span",{class:"hljs-built_in"},"module"),s(`.exports = {
  `),t("span",{class:"hljs-attr"},"moduleCompatible"),s(`: {
    `),t("span",{class:"hljs-string"},`"import dayjs from 'dayjs/esm'\\n"`),s(": "),t("span",{class:"hljs-string"},`"import * as dayjs from 'dayjs'\\n"`),s(`
  }
}
`)])],-1),C=n('<div class="card"><h3>SiteThemes</h3><p>Theme variables are related, because the default theme variables may be modified from time to time, subject to the theme of the <code>varlet</code> official document</p><table><thead><tr><th>Variable</th></tr></thead><tbody><tr><td><code>color-body</code></td></tr><tr><td><code>color-bar</code></td></tr><tr><td><code>color-sub-bar</code></td></tr><tr><td><code>color-text</code></td></tr><tr><td><code>color-sub-text</code></td></tr><tr><td><code>color-border</code></td></tr><tr><td><code>color-shadow</code></td></tr><tr><td><code>color-introduce-border</code></td></tr><tr><td><code>color-primary</code></td></tr><tr><td><code>color-link</code></td></tr><tr><td><code>color-type</code></td></tr><tr><td><code>color-progress</code></td></tr><tr><td><code>color-progress-track</code></td></tr><tr><td><code>color-side-bar</code></td></tr><tr><td><code>color-side-bar-active-background</code></td></tr><tr><td><code>color-app-bar</code></td></tr><tr><td><code>color-nav-button-hover-background</code></td></tr><tr><td><code>color-mobile-cell-hover</code></td></tr><tr><td><code>color-pc-language-active</code></td></tr><tr><td><code>color-pc-language-active-background</code></td></tr><tr><td><code>color-mobile-language-active</code></td></tr><tr><td><code>color-mobile-language-active-background</code></td></tr><tr><td><code>color-hl-background</code></td></tr><tr><td><code>color-hl-code</code></td></tr><tr><td><code>color-hl-border</code></td></tr><tr><td><code>color-hl-group-a</code></td></tr><tr><td><code>color-hl-group-b</code></td></tr><tr><td><code>color-hl-group-c</code></td></tr><tr><td><code>color-hl-group-d</code></td></tr><tr><td><code>color-hl-group-e</code></td></tr><tr><td><code>color-hl-group-f</code></td></tr><tr><td><code>color-hl-group-g</code></td></tr><tr><td><code>color-hl-group-h</code></td></tr><tr><td><code>color-hl-group-i</code></td></tr></tbody></table></div><div class="card"><h3>SiteHighlight</h3><p>Code snippets are highlighted, based on <a href="https://highlightjs.org/">highlight.js</a></p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>style</code></td><td>highlight css link</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>SiteAnalysis</h3><p>Statistics related to buried points</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>baidu</code></td><td>Baidu statistics script address</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div>',3),D={class:"card"},B=t("h3",null,"SitePC, SiteMobile",-1),M=t("p",null,"The document structure is partly related, and the example configuration is as follows",-1),N=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-built_in"},"module"),s(`.exports = {
  `),t("span",{class:"hljs-attr"},"defaultLanguage"),s(": "),t("span",{class:"hljs-string"},"'en-US'"),s(`,
  `),t("span",{class:"hljs-attr"},"pc"),s(`: {
    `),t("span",{class:"hljs-attr"},"redirect"),s(": "),t("span",{class:"hljs-string"},"'/home'"),s(`,
    `),t("span",{class:"hljs-attr"},"title"),s(`: {
      `),t("span",{class:"hljs-string"},"'en-US'"),s(": "),t("span",{class:"hljs-string"},"'A components library'"),s(`,
    },
    `),t("span",{class:"hljs-attr"},"header"),s(`: {
      `),t("span",{class:"hljs-attr"},"darkMode"),s(": "),t("span",{class:"hljs-literal"},"null"),s(`,
      `),t("span",{class:"hljs-attr"},"i18n"),s(": "),t("span",{class:"hljs-literal"},"null"),s(`,
      `),t("span",{class:"hljs-attr"},"github"),s(": "),t("span",{class:"hljs-string"},"'https://github.com/varletjs/varlet'"),s(`,
    },
    `),t("span",{class:"hljs-attr"},"menu"),s(`: [
      {
        `),t("span",{class:"hljs-attr"},"text"),s(`: {
          `),t("span",{class:"hljs-string"},"'en-US'"),s(": "),t("span",{class:"hljs-string"},"'Develop Guide'"),s(`,
        },
        `),t("span",{class:"hljs-comment"},"// Sidebar menu directory"),s(`
        `),t("span",{class:"hljs-attr"},"type"),s(": "),t("span",{class:"hljs-number"},"1"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"text"),s(`: {
          `),t("span",{class:"hljs-string"},"'en-US'"),s(": "),t("span",{class:"hljs-string"},"'Basic Intro'"),s(`,
        },
        `),t("span",{class:"hljs-attr"},"doc"),s(": "),t("span",{class:"hljs-string"},"'home'"),s(`,
        `),t("span",{class:"hljs-comment"},"// Index the md document in the root directory of the project"),s(`
        `),t("span",{class:"hljs-attr"},"type"),s(": "),t("span",{class:"hljs-number"},"3"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"text"),s(`: {
          `),t("span",{class:"hljs-string"},"'en-US'"),s(": "),t("span",{class:"hljs-string"},"'Basic Component'"),s(`,
        },
        `),t("span",{class:"hljs-attr"},"type"),s(": "),t("span",{class:"hljs-number"},"1"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"text"),s(`: {
          `),t("span",{class:"hljs-string"},"'en-US'"),s(": "),t("span",{class:"hljs-string"},"'Button'"),s(`,
        },
        `),t("span",{class:"hljs-attr"},"doc"),s(": "),t("span",{class:"hljs-string"},"'button'"),s(`,
        `),t("span",{class:"hljs-comment"},"// Md document in the root directory of the index component"),s(`
        `),t("span",{class:"hljs-attr"},"type"),s(": "),t("span",{class:"hljs-number"},"2"),s(`,
      },
    ],
  },
  `),t("span",{class:"hljs-attr"},"mobile"),s(`: {
    `),t("span",{class:"hljs-attr"},"redirect"),s(": "),t("span",{class:"hljs-string"},"'/home'"),s(`,
    `),t("span",{class:"hljs-attr"},"title"),s(`: {
      `),t("span",{class:"hljs-string"},"'en-US'"),s(": "),t("span",{class:"hljs-string"},"'A components library'"),s(`,
    },
    `),t("span",{class:"hljs-attr"},"header"),s(`: {
      `),t("span",{class:"hljs-attr"},"darkMode"),s(": "),t("span",{class:"hljs-literal"},"null"),s(`,
      `),t("span",{class:"hljs-attr"},"i18n"),s(": "),t("span",{class:"hljs-literal"},"null"),s(`,
      `),t("span",{class:"hljs-attr"},"playground"),s(": "),t("span",{class:"hljs-literal"},"null"),s(`,
      `),t("span",{class:"hljs-attr"},"github"),s(": "),t("span",{class:"hljs-string"},"'https://github.com/varletjs/varlet'"),s(`,
    },
  },
}
`)])],-1),U={class:"card"},I=t("h3",null,"Commands Intro",-1),V=t("h4",null,"Start the development server",-1),P=t("pre",{class:"hljs"},[t("code",null,`varlet-cli dev
`)],-1),A=t("h4",null,"Build documentation site",-1),G=t("pre",{class:"hljs"},[t("code",null,`varlet-cli build
`)],-1),L=t("h4",null,"Preview documentation site",-1),O=t("pre",{class:"hljs"},[t("code",null,`varlet-cli preview
`)],-1),E=t("h4",null,"Build component library code",-1),$=t("pre",{class:"hljs"},[t("code",null,`varlet-cli compile
`)],-1),F=t("h4",null,"Perform all unit tests",-1),z=t("pre",{class:"hljs"},[t("code",null,`varlet-cli test
`)],-1),H=t("h4",null,"Execute unit tests in watch mode",-1),R=t("pre",{class:"hljs"},[t("code",null,`varlet-cli test -w
or
varlet-cli test -wa
`)],-1),W=t("h4",null,"Lint code",-1),J=t("pre",{class:"hljs"},[t("code",null,`varlet-cli lint
`)],-1),Q=t("h4",null,"Lint commit message",-1),q=t("pre",{class:"hljs"},[t("code",null,`varlet-cli commit-lint
`)],-1),K=t("h4",null,"Generate changelog",-1),X=t("pre",{class:"hljs"},[t("code",null,`varlet-cli changelog
`)],-1),Y=t("h4",null,"Release component library",-1),Z=t("pre",{class:"hljs"},[t("code",null,`varlet-cli release
`)],-1),tt=t("h4",null,"Generate a project template",-1),st=t("pre",{class:"hljs"},[t("code",null,`varlet-cli gen <projectName>
`)],-1),et={class:"card"},lt=t("h3",null,"Babel",-1),ot=t("p",null,[s("To configure "),t("code",null,"babel"),s(", first specify the target browser in "),t("code",null,"package.json")],-1),nt=t("pre",{class:"hljs"},[t("code",null,[s(`{
  `),t("span",{class:"hljs-attr"},'"browserslist"'),s(`: [
    `),t("span",{class:"hljs-string"},'"Chrome >= 51"'),s(`,
    `),t("span",{class:"hljs-string"},'"iOS >= 10"'),s(`
  ]
}
`)])],-1),at=t("p",null,[s("create "),t("code",null,"babel.config,js")],-1),ct=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-comment"},"// babel.config.js"),s(`
`),t("span",{class:"hljs-built_in"},"module"),s(`.exports = {
  `),t("span",{class:"hljs-attr"},"presets"),s(`: [
    [
      `),t("span",{class:"hljs-string"},"'@varlet/cli/preset'"),s(`,
      {
        `),t("span",{class:"hljs-attr"},"loose"),s(": "),t("span",null,"process.env"),s(".NODE_ENV === "),t("span",{class:"hljs-string"},"'compile'"),s(`,
      },
    ],
  ],
}
`)])],-1),dt={class:"card"},rt=n("<h3>Git and Npm</h3><h4>Git-hook</h4><p><code>simple-git-hooks</code>, <code>lint-staged</code> cooperate with <code>eslint</code>, <code>stylelint</code>, <code>varlet-cli commit-lint</code> to check before commit, <code>package.json</code> configuration is as follows</p>",3),it=t("pre",{class:"hljs"},[t("code",null,[s(`{
  `),t("span",{class:"hljs-attr"},'"simple-git-hooks"'),s(`: {
    `),t("span",{class:"hljs-attr"},'"pre-commit"'),s(": "),t("span",{class:"hljs-string"},'"pnpm exec lint-staged --allow-empty --concurrent false"'),s(`,
    `),t("span",{class:"hljs-attr"},'"commit-msg"'),s(": "),t("span",{class:"hljs-string"},'"npx --no-install varlet-cli commit-lint $1"'),s(`
  },
  `),t("span",{class:"hljs-attr"},'"lint-staged"'),s(`: {
    `),t("span",{class:"hljs-attr"},'"*.{ts,tsx,js,vue,less}"'),s(": "),t("span",{class:"hljs-string"},'"prettier --write"'),s(`,
    `),t("span",{class:"hljs-attr"},'"*.{ts,tsx,js,vue}"'),s(": "),t("span",{class:"hljs-string"},'"eslint --fix"'),s(`,
    `),t("span",{class:"hljs-attr"},'"*.{vue,css,less}"'),s(": "),t("span",{class:"hljs-string"},'"stylelint --fix"'),s(`
  },
  `),t("span",{class:"hljs-attr"},'"eslintConfig"'),s(`: {
    `),t("span",{class:"hljs-attr"},'"root"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"ignorePatterns"'),s(`: [
      `),t("span",{class:"hljs-string"},'"es/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"umd/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"site/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"public/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"src/*/__tests__/**"'),s(`,
      `),t("span",{class:"hljs-string"},'".varlet/**"'),s(`
    ],
    `),t("span",{class:"hljs-attr"},'"extends"'),s(`: [
      `),t("span",{class:"hljs-string"},'"@varlet"'),s(`
    ]
  },
  `),t("span",{class:"hljs-attr"},'"stylelint"'),s(`: {
    `),t("span",{class:"hljs-attr"},'"extends"'),s(`: [
      `),t("span",{class:"hljs-string"},'"@varlet/stylelint-config"'),s(`
    ],
    `),t("span",{class:"hljs-attr"},'"ignoreFiles"'),s(`: [
      `),t("span",{class:"hljs-string"},'"es/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"umd/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"site/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"coverage/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"public/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"highlight/**"'),s(`
    ]
  }
}
`)])],-1),ht=t("p",null,"Mount Git Hooks",-1),pt=t("pre",{class:"hljs"},[t("code",null,`npx simple-git-hooks
`)],-1),ut=t("p",null,[s("create "),t("code",null,".prettierignore")],-1),mt=t("pre",{class:"hljs"},[t("code",null,`// .prettierignore
coverage/**
es/**
umd/**
site/**
public/**
src/*/__tests__/**
*.md
`)],-1),jt={class:"card"},gt=t("h3",null,"Typescript",-1),_t=t("p",null,[s("create "),t("code",null,"tsconfig.json")],-1),bt=t("pre",{class:"hljs"},[t("code",null,[s(`{
  `),t("span",{class:"hljs-attr"},'"compilerOptions"'),s(`: {
    `),t("span",{class:"hljs-attr"},'"strict"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"downlevelIteration"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"declaration"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"skipLibCheck"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"esModuleInterop"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"allowJs"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"lib"'),s(": ["),t("span",{class:"hljs-string"},'"esnext"'),s(", "),t("span",{class:"hljs-string"},'"dom"'),s(`],
    `),t("span",{class:"hljs-attr"},'"allowSyntheticDefaultImports"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"jsx"'),s(": "),t("span",{class:"hljs-string"},'"preserve"'),s(`
  }
}
`)])],-1),ft=t("div",{class:"card"},[t("h3",null,"Note before release"),t("ul",null,[t("li",null,"1.The registry of npm must set to the official npm mirror"),t("li",null,"2.The npm must execute the login command for user login")])],-1);function vt(yt,xt,wt,kt,St,Tt){const e=c("var-site-code-example");return d(),r("div",h,[p,t("div",u,[m,j,l(e,null,{default:o(()=>[g]),_:1}),_]),b,t("div",f,[v,y,l(e,null,{default:o(()=>[x]),_:1}),w,l(e,null,{default:o(()=>[k]),_:1}),S,l(e,null,{default:o(()=>[T]),_:1})]),C,t("div",D,[B,M,l(e,null,{default:o(()=>[N]),_:1})]),t("div",U,[I,V,l(e,null,{default:o(()=>[P]),_:1}),A,l(e,null,{default:o(()=>[G]),_:1}),L,l(e,null,{default:o(()=>[O]),_:1}),E,l(e,null,{default:o(()=>[$]),_:1}),F,l(e,null,{default:o(()=>[z]),_:1}),H,l(e,null,{default:o(()=>[R]),_:1}),W,l(e,null,{default:o(()=>[J]),_:1}),Q,l(e,null,{default:o(()=>[q]),_:1}),K,l(e,null,{default:o(()=>[X]),_:1}),Y,l(e,null,{default:o(()=>[Z]),_:1}),tt,l(e,null,{default:o(()=>[st]),_:1})]),t("div",et,[lt,ot,l(e,null,{default:o(()=>[nt]),_:1}),at,l(e,null,{default:o(()=>[ct]),_:1})]),t("div",dt,[rt,l(e,null,{default:o(()=>[it]),_:1}),ht,l(e,null,{default:o(()=>[pt]),_:1}),ut,l(e,null,{default:o(()=>[mt]),_:1})]),t("div",jt,[gt,_t,l(e,null,{default:o(()=>[bt]),_:1})]),ft])}var Bt=a(i,[["render",vt]]);export{Bt as default};
