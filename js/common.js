//AutoPaferize対策
$(function() {
	$('div.pager').remove();
});

//特定のページで日付を消す
$(function() {
	displayNone('http://mamemame.hatenablog.jp/entry/profile');
	displayNone('http://mamemame.hatenablog.jp/entry/diary');
	displayNone('http://mamemame.hatenablog.jp/entry/illust');
	displayNone('http://mamemame.hatenablog.jp/entry/music');
	displayNone('http://mamemame.hatenablog.jp/entry/kiriban');
	displayNone('http://mamemame.hatenablog.jp/entry/link');
	displayNone('http://mamemame.hatenablog.jp/entry/mail');
	displayNone('http://mamemame.hatenablog.jp/entry/workhistory');

	
	function displayNone(url) {
		if(url == location.href) {
		  $('div.entry-date').css('display','none');
		}
	}
});

/*
$(function() {
	if("http://mamemame.hatenablog.jp/entry/profile" == location.href) {
	  $('div.entry-date').css('display','none');
	}
	if("http://mamemame.hatenablog.jp/entry/diary" == location.href) {
	  $('div.entry-date').css('display','none');
	}
	if("http://mamemame.hatenablog.jp/entry/illust" == location.href) {
	  $('div.entry-date').css('display','none');
	}
	if("http://mamemame.hatenablog.jp/entry/kiriban" == location.href) {
	  $('div.entry-date').css('display','none');
	}
	if("http://mamemame.hatenablog.jp/entry/link" == location.href) {
	  $('div.entry-date').css('display','none');
	}
	if("http://mamemame.hatenablog.jp/entry/mail" == location.href) {
	  $('div.entry-date').css('display','none');
	}
});
*/