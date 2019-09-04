module.exports = {
    port: "3000",
    dest: "docs",
    ga: "UA-85414008-1",
    base: "/",
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Java 全栈知识体系",
            description: "Java 全栈知识体系"
        }
    },
    head: [["link", {rel: "icon", href: `/favicon.ico`}]],
    plugins: [
        ['@vuepress/back-to-top', true]
    ],
    themeConfig: {
        repo: "realpdai/tech-arch-doc",
        docsRepo: "realpdai/tech-arch-doc",
        editLinks: true,
        sidebarDepth:0,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                    {
                        text: 'Java 相关',
                        items: [
                            {text: 'Java 基础', link: '/md/java/basic/java-basic-oop.md'},
                            {text: 'Java 集合框架', link: '/md/java/collection/java-collection-all.md'},
                            {text: 'Java IO/NIO/AIO', link: '/md/java/io/java-io.md'}
                        ]
                    },
                    {
                        text: 'Spring 相关',
                        items: [
                            {text: 'Spring 基础', link: '/md/spring/spring.md'},
                            {text: 'Spring Boot 入门', link: '/md/spring/springboot-helloworld.md'},
                            {text: 'Spring Boot 进阶', link: '/md/spring/springboot-data-multi.md'}
                        ]
                    }
                    // , {text: "Spring 相关", link: "/md/spring/" }
                ],
                sidebar: {
                    "/md/spring/": genSidebar4Spring(),
                    "/md/java/": genSidebar4Java()
                }
            }
        }
    }
};
function genSidebar4Java(){
    return [
        {
            title: "Java 基础",
            collapsable: false,
            sidebarDepth: 0, 
            children: [
                "basic/java-basic-oop.md", 
                "basic/java-basic-lan-basic.md",
                "basic/java-basic-lan-sum.md"
            ]
        },
        {
            title: "Java 集合框架",
            collapsable: false,
            sidebarDepth: 0, 
            children: [
                "collection/java-collection-all.md", 
                "collection/java-collection-ArrayList.md",
                "collection/java-collection-LinkedList.md",
                "collection/java-collection-Queue&Stack.md",
                "collection/java-collection-PriorityQueue.md",
                "collection/java-map-HashMap&HashSet.md",
                "collection/java-map-LinkedHashMap&LinkedHashSet.md",
                "collection/java-map-TreeMap&TreeSet.md",
                "collection/java-map-WeakHashMap.md",
            ]
        },
        {
            title: "Java IO/NIO/AIO",
            collapsable: false,
            sidebarDepth: 0, 
            children: [
                "io/java-io.md", 
                "io/java-io-basic.md",
                "io/java-io-basic2.md",
                "io/java-io-basic3.md",
                "io/java-io-model.md",
                "io/java-io-nio.md",
                "io/java-io-nio-netty.md"
            ]
        }
    ];
}
function genSidebar4Spring() {
    return [
        {
            title: "Spring 基础",
            collapsable: false,
            sidebarDepth: 0, 
            children: [
                "spring", 
                "springmvc",
                "spring-bean-lifecycle",
                "spring-aop",
            ]
        },
        {
            title: "Spring Boot 入门",
            collapsable: false,
            children: [
                "springboot-helloworld",
                "springboot-data-swagger",
                "springboot-data-logback",
                "springboot-data-mybatis",
                "springboot-data-mongodb",
                "springboot-data-es",
                "springboot-data-websocket",
                "springboot-data-interface",
                "springboot-data-ratelimit",
                "springboot-data-quartz",
            ]
        },
        {
            title: "Spring Boot 进阶",
            collapsable: false,
            children: [
                "springboot-data-multi",
                "springboot-javaConfig",
                "springboot-jar-3rd",
                "springboot-starter-demo",
                "springboot-javafx-native"
            ]
        }
    ]
}
