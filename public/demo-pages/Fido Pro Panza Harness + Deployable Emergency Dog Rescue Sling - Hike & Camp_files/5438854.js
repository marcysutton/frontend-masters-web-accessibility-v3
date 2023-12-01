(function(w,d,s,i) {
    var c=d.currentScript;
    if (c) {
        var uo = c.getAttribute('data-ueto');
        if (uo && w[uo] && w[uo].uetConfig && w[uo].uetConfig.deBlock === true)
            return;
    }
    var f,j; f=d.getElementsByTagName(s)[0]; j=d.createElement(s); j.async=true;
    j.src='https://www.clarity.ms/tag/uet/'+i+'';
    j.onload = function () {
        if (!c) return;
        var co = function(u) { return u && typeof u === 'object' && !(u instanceof Array) && u.beaconParams && u.beaconParams.mid && w.clarity; };
        var r = 40;
        var cl = function() {
            if (r-- < 1) return;
            var uo = c.getAttribute('data-ueto');
            if (!uo) return;
            var u = w[uo];
            w.clarityuetq = w.mtagq || u;
            if (!co(u)) { setTimeout(function () { cl(); }, 250); return; }
            var m = u.beaconParams.mid;
            w.clarity('set', '_uetmid', m);
            w.clarity('metadata', (function () { w.clarity('set', '_uetmid', m); }), false);
            d.addEventListener('UetEvent', function(e) {
                var nm = u.beaconParams.mid;
                if (m !== nm) { m = nm; w.clarity('set', '_uetmid', m); }
            });
        };
        cl();
    };
    f.parentNode.insertBefore(j,f);

    function launchEventSetup() {
        if (!w.opener) {return;}
        var sessionIdKey = 'ms-event-setup-session-id';
        var originKey = 'ms-event-setup-event-origin';
        if (sessionStorage) {
            var sessionId = sessionStorage.getItem(sessionIdKey);
            var eventOrigin = sessionStorage.getItem(originKey);
            if (sessionId && eventOrigin) {
                w.opener.postMessage({type: 'REINIT_CLARITY_EVENT_SETUP'}, eventOrigin);
            }
        }
        w.addEventListener('message', function eventListener(e) {
            var oRegex = /^https:\/\/.*\.microsoft\.com(:[0-9]+)?$/i;
            if (!oRegex.test(e.origin)) {return;};
            // ignore the event if it does not match the UET tag of the current page
            if (!e.data || !e.data.params || i !== e.data.params.TagId) {return;}
            if (!(e.data.type === 'INIT_CLARITY_EVENT_SETUP' || e.data.type === 'ACK_REINIT_CLARITY_EVENT_SETUP')) { return; };
            // clarity picker script element
            var cp = d.createElement(s); cp.src = 'https://clarity.microsoft.com/eventPicker.js'; cp.async=true;
            cp.onload = function() {
                // event setup script element
                var est = d.createElement(s); est.src = 'https://bat.bing.com/s/uet/eventSetup.js'; est.async=true;
                var b = d.getElementsByTagName('body')[0];
                var es = d.createElement('event-setup-tool'); b.prepend(es);
                // pass init data to event setup
                es.setAttribute("initData", JSON.stringify(e.data.params));
                es.setAttribute("eventOrigin", e.origin);
                if (sessionStorage) {
                    // save session id and event origin in session storage
                    sessionStorage.setItem(sessionIdKey, e.data.params.SessionId);
                    sessionStorage.setItem(originKey, e.origin);
                }
                if (e.data.type === 'INIT_CLARITY_EVENT_SETUP') {
                    w.opener.postMessage({type: 'ACK_INIT_CLARITY_EVENT_SETUP'}, e.origin);
                }
                f.parentNode.insertBefore(est,f);
            };
            f.parentNode.insertBefore(cp,f);
            w.removeEventListener('message', eventListener);
        });
    }
    launchEventSetup();
})(window, document, 'script', '5438854');
