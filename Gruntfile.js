module.exports = function(grunt){

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            "my_target":{
                "files":{
                    'js/main.min.js':['js/jquery.min.js','js/index.js','js/jquery.event.drag.js','js/jQuery.touchSlider.js','js/public.js'
                        ,'js/bootstrap.min.js','js/swipe.min.js','case/js/case.js','js/waterfall.js','js/backTop.js']
                }
            }
        },
        concat : {

            css : {
                src:['css/bootstrap.min.css','css/public.css','css/index.css','css/iconfont.css','css/iconfont2.min.css','case/css/case.css'],
                dest:'css/main.css'
            }

        },
        cssmin: {
            combine: {
                    files: {
                        'css/main.min.css': ['css/bootstrap.min.css','css/public2.css','css/index.css','css/iconfont.css','css/iconfont2.min.css','case/css/case.css','css/news.min.css']
                    }
                }
        },
        watch: {
            client: {
                files: ['*.html', 'css/*', 'js/*', 'images/**/*'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // 加载提供任务的插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // 默认任务
    grunt.registerTask('jsmin', ['uglify']);
    grunt.registerTask('default', ['cssmin']);
    grunt.registerTask('swipe', ['swipe']);

}


