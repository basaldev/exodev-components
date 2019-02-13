"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react/require-default-props */
var react_1 = __importDefault(require("react"));
var react_helmet_1 = __importDefault(require("react-helmet"));
var SEO = function (_a) {
    var postNode = _a.postNode, postPath = _a.postPath, postSEO = _a.postSEO, config = _a.config;
    var title;
    var description;
    var image;
    var postURL;
    var schemaOrgJSONLD;
    if (postSEO) {
        var postMeta = postNode.frontmatter;
        title = postMeta.title; // eslint-disable-line prefer-destructuring
        description = postNode.excerpt;
        image = postMeta.banner || config.meta.banner;
        postURL = config.siteUrl + postPath;
    }
    else {
        title = config.meta.title;
        description = config.meta.description;
        image = config.meta.banner;
    }
    if (postSEO) {
        schemaOrgJSONLD = [
            {
                '@context': 'http://schema.org',
                '@type': 'BlogPosting',
                '@id': postURL,
                'url': postURL,
                'name': title,
                'headline': title,
                'image': {
                    '@type': 'ImageObject',
                    'url': image,
                },
                'description': description,
                'datePublished': postNode.frontmatter.date,
                'dateModified': postNode.frontmatter.date,
                'author': {
                    '@type': 'Person',
                    "name": postNode.frontmatter.author,
                },
                "publisher": {
                    '@type': 'Organization',
                    "name": config.company,
                    "logo": {
                        '@type': 'ImageObject',
                        "url": config.siteUrl + config.logo,
                    },
                },
                "isPartOf": config.siteUrl,
                "mainEntityOfPage": {
                    '@type': 'WebSite',
                    '@id': config.siteUrl,
                },
            },
        ];
    }
    else {
        schemaOrgJSONLD = [
            {
                '@context': 'http://schema.org',
                '@type': 'WebSite',
                '@id': config.siteUrl,
                'url': config.siteUrl,
                'name': title,
                'image': {
                    '@type': 'ImageObject',
                    'url': config.meta.banner,
                },
            },
        ];
    }
    var FacebookId = (react_1.default.createElement("meta", { property: "fb:app_id", content: config.intergrations.facebookId }));
    var TwitterCreator = config.social.twitter ? (react_1.default.createElement("meta", { name: "twitter:creator", content: config.social.twitter })) : null;
    var OgType = postSEO ? (react_1.default.createElement("meta", { property: "og:type", content: "article" })) : null;
    return (react_1.default.createElement(react_helmet_1.default, null,
        react_1.default.createElement("html", { lang: config.meta.language }),
        react_1.default.createElement("title", null, config.meta.title),
        react_1.default.createElement("meta", { name: "description", content: description }),
        react_1.default.createElement("meta", { name: "image", content: image }),
        react_1.default.createElement("script", { type: "application/ld+json" }, JSON.stringify(schemaOrgJSONLD)),
        react_1.default.createElement("meta", { property: "og:locale", content: config.meta.language }),
        react_1.default.createElement("meta", { property: "og:site_name", content: config.meta.title }),
        react_1.default.createElement("meta", { property: "og:url", content: postSEO ? postURL : config.siteUrl }),
        react_1.default.createElement("meta", { property: "og:title", content: title }),
        react_1.default.createElement("meta", { property: "og:description", content: description }),
        react_1.default.createElement("meta", { property: "og:image", content: image }),
        OgType,
        FacebookId,
        TwitterCreator,
        react_1.default.createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
        react_1.default.createElement("meta", { name: "twitter:title", content: title }),
        react_1.default.createElement("meta", { name: "twitter:url", content: config.siteUrl }),
        react_1.default.createElement("meta", { name: "twitter:description", content: description }),
        react_1.default.createElement("meta", { name: "twitter:image", content: image })));
};
exports.default = SEO;
//# sourceMappingURL=index.js.map