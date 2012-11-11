document.write('<link rel="stylesheet" href="https://gist.github.com/stylesheets/gist/embed.css"/>')

document.write('<div id=\"gist-162444\" class=\"gist\">\n\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n              <div class=\"gist-highlight\"><pre><div class=\'line\' id=\'LC1\'><span class=\"c1\"># you&#39;d obviously have more settings somewhere<\/span><\/div><div class=\'line\' id=\'LC2\'><span class=\"n\">set<\/span> <span class=\"ss\">:repository<\/span><span class=\"p\">,<\/span> <span class=\"s2\">&quot;git@github.com:defunkt/github.git&quot;<\/span><\/div><div class=\'line\' id=\'LC3\'><span class=\"n\">set<\/span> <span class=\"ss\">:branch<\/span><span class=\"p\">,<\/span>     <span class=\"s2\">&quot;origin/master&quot;<\/span><\/div><div class=\'line\' id=\'LC4\'><br/><\/div><div class=\'line\' id=\'LC5\'><span class=\"n\">namespace<\/span> <span class=\"ss\">:deploy<\/span> <span class=\"k\">do<\/span><\/div><div class=\'line\' id=\'LC6\'>&nbsp;&nbsp;<span class=\"n\">desc<\/span> <span class=\"s2\">&quot;Deploy the MFer&quot;<\/span><\/div><div class=\'line\' id=\'LC7\'>&nbsp;&nbsp;<span class=\"n\">task<\/span> <span class=\"ss\">:default<\/span> <span class=\"k\">do<\/span><\/div><div class=\'line\' id=\'LC8\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"n\">update<\/span><\/div><div class=\'line\' id=\'LC9\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"n\">restart<\/span><\/div><div class=\'line\' id=\'LC10\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"n\">cleanup<\/span><\/div><div class=\'line\' id=\'LC11\'>&nbsp;&nbsp;<span class=\"k\">end<\/span><\/div><div class=\'line\' id=\'LC12\'><br/><\/div><div class=\'line\' id=\'LC13\'>&nbsp;&nbsp;<span class=\"n\">desc<\/span> <span class=\"s2\">&quot;Setup a GitHub-style deployment.&quot;<\/span><\/div><div class=\'line\' id=\'LC14\'>&nbsp;&nbsp;<span class=\"n\">task<\/span> <span class=\"ss\">:setup<\/span><span class=\"p\">,<\/span> <span class=\"ss\">:except<\/span> <span class=\"o\">=&gt;<\/span> <span class=\"p\">{<\/span> <span class=\"ss\">:no_release<\/span> <span class=\"o\">=&gt;<\/span> <span class=\"kp\">true<\/span> <span class=\"p\">}<\/span> <span class=\"k\">do<\/span><\/div><div class=\'line\' id=\'LC15\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"n\">run<\/span> <span class=\"s2\">&quot;git clone <\/span><span class=\"si\">#{<\/span><span class=\"n\">repository<\/span><span class=\"si\">}<\/span><span class=\"s2\"> <\/span><span class=\"si\">#{<\/span><span class=\"n\">current_path<\/span><span class=\"si\">}<\/span><span class=\"s2\">&quot;<\/span><\/div><div class=\'line\' id=\'LC16\'>&nbsp;&nbsp;<span class=\"k\">end<\/span><\/div><div class=\'line\' id=\'LC17\'><br/><\/div><div class=\'line\' id=\'LC18\'>&nbsp;&nbsp;<span class=\"n\">desc<\/span> <span class=\"s2\">&quot;Update the deployed code.&quot;<\/span><\/div><div class=\'line\' id=\'LC19\'>&nbsp;&nbsp;<span class=\"n\">task<\/span> <span class=\"ss\">:update_code<\/span><span class=\"p\">,<\/span> <span class=\"ss\">:except<\/span> <span class=\"o\">=&gt;<\/span> <span class=\"p\">{<\/span> <span class=\"ss\">:no_release<\/span> <span class=\"o\">=&gt;<\/span> <span class=\"kp\">true<\/span> <span class=\"p\">}<\/span> <span class=\"k\">do<\/span><\/div><div class=\'line\' id=\'LC20\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"n\">run<\/span> <span class=\"s2\">&quot;cd <\/span><span class=\"si\">#{<\/span><span class=\"n\">current_path<\/span><span class=\"si\">}<\/span><span class=\"s2\">; git fetch origin; git reset --hard <\/span><span class=\"si\">#{<\/span><span class=\"n\">branch<\/span><span class=\"si\">}<\/span><span class=\"s2\">&quot;<\/span><\/div><div class=\'line\' id=\'LC21\'>&nbsp;&nbsp;<span class=\"k\">end<\/span><\/div><div class=\'line\' id=\'LC22\'><br/><\/div><div class=\'line\' id=\'LC23\'>&nbsp;&nbsp;<span class=\"n\">desc<\/span> <span class=\"s2\">&quot;Rollback a single commit.&quot;<\/span><\/div><div class=\'line\' id=\'LC24\'>&nbsp;&nbsp;<span class=\"n\">task<\/span> <span class=\"ss\">:rollback<\/span><span class=\"p\">,<\/span> <span class=\"ss\">:except<\/span> <span class=\"o\">=&gt;<\/span> <span class=\"p\">{<\/span> <span class=\"ss\">:no_release<\/span> <span class=\"o\">=&gt;<\/span> <span class=\"kp\">true<\/span> <span class=\"p\">}<\/span> <span class=\"k\">do<\/span><\/div><div class=\'line\' id=\'LC25\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"n\">set<\/span> <span class=\"ss\">:branch<\/span><span class=\"p\">,<\/span> <span class=\"s2\">&quot;HEAD^&quot;<\/span><\/div><div class=\'line\' id=\'LC26\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"n\">default<\/span><\/div><div class=\'line\' id=\'LC27\'>&nbsp;&nbsp;<span class=\"k\">end<\/span><\/div><div class=\'line\' id=\'LC28\'><span class=\"k\">end<\/span><\/div><\/pre><\/div>\n          <\/div>\n\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/raw/162444/6e3a81c85dd6e86f711f24619caf561f2c1ccc16/gistfile1.rb\" style=\"float:right;\">view raw<\/a>\n            <a href=\"https://gist.github.com/162444#file_gistfile1.rb\" style=\"float:right;margin-right:10px;color:#666\">gistfile1.rb<\/a>\n            <a href=\"https://gist.github.com/162444\">This Gist<\/a> brought to you by <a href=\"http://github.com\">GitHub<\/a>.\n          <\/div>\n        <\/div>\n<\/div>\n')
