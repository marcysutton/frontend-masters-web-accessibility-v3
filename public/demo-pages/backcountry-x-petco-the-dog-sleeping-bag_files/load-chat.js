(function() {
  let chatScriptLoaded = false;
  const messagingScript = 'https://sdk.cxengage.net/js/messaging/1.0.1/messaging.js';
  const chatOpenEvent = 'bc_chat::open';
  const chatMountEvent = 'bc_chat::mounted';

  const SITES = {
    BACKCOUNTRY: {
      HOST: 'www.backcountry.com',
      NAME: 'backcountry'
    },
    COMPETITIVE_CYCLIST: {
      HOST: 'www.competitivecyclist.com',
      NAME: 'competitivecyclist'
    },
    STEEPANDCHEAP: {
      HOST: 'www.steepandcheap.com',
      NAME: 'steepandcheap'
    },
    MOTOSPORT: {
      HOST: 'www.motosport.com',
      NAME: 'motosport'
    }
  };

  function getSite(host) {
    return (host.indexOf(SITES.BACKCOUNTRY.NAME) !== -1) && SITES.BACKCOUNTRY.NAME ||
      (host.indexOf(SITES.COMPETITIVE_CYCLIST.NAME) !== -1) && SITES.COMPETITIVE_CYCLIST.NAME ||
      (host.indexOf(SITES.STEEPANDCHEAP.NAME) !== -1) && SITES.STEEPANDCHEAP.NAME ||
      (host.indexOf(SITES.MOTOSPORT.NAME) !== -1) && SITES.MOTOSPORT.NAME;
  }

  function getChatScript() {
    const host = location.hostname;
    const isProd = [
      SITES.BACKCOUNTRY.HOST,
      SITES.COMPETITIVE_CYCLIST.HOST,
      SITES.STEEPANDCHEAP.HOST,
      SITES.MOTOSPORT.HOST].indexOf(host) !== -1;
    const site = getSite(host);
    if (isProd) {
        return 'https://content.'+site+'.com/assets/chat/backcountry-chat-module.js.gz';
    } else {
      return 'https://staging-serenova-chat-assets.s3.amazonaws.com/assets/chat/backcountry-chat-module.js.gz';
    }
  }

  function loadDynamicScript(url, callback) {
    const script = document.createElement('script');
    script.src = url; // URL for the third-party library being loaded.
    document.body.appendChild(script);
    script.onload = callback;
  }

  function ready(callback) {
    // in case the document is already rendered
    if (document.readyState !== 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState === 'complete') callback();
      });
  }

  function eventDispatcher(domId, event, args) {
    // TODO This its temporal, remove it when focus trap problem its solve...
    document.dispatchEvent(
      new KeyboardEvent("keydown",{ 'key': 'Escape' })
    );
    const dom = document.getElementById(domId);
    const customEvent = new CustomEvent(event, args);
    dom && dom.dispatchEvent(customEvent);
  }

  function autoOpenChat() {
    const tabId = 'bcvuex-' + sessionStorage.getItem('tabId');
    if (tabId) {
      const storage = localStorage.getItem(tabId);
      if (storage) {
        let vuexInfo
        try {
          vuexInfo = JSON.parse(storage);
        } catch (e) {
          vuexInfo = {}
        }
        if (vuexInfo.UiModule && vuexInfo.UiModule._isChatActive) {
          document.dispatchEvent(new CustomEvent("bc_chat::open", { detail: { wasChatActive: true }}));
        }
      }
    }
  }

  ready(function () {
    const app = document.createElement('div');
    app.id = 'backcountry-chat';
    document.body.appendChild(app);
  });

  document.addEventListener(chatOpenEvent, function(args) {
    if (chatScriptLoaded) {
      eventDispatcher('bc_chat', chatOpenEvent, args);
    } else {
      loadDynamicScript(
        getChatScript()
      );
      loadDynamicScript(
        messagingScript
      );
      // we need to wait until the vue app is actually mounted in order to tell it to load
      document.addEventListener(chatMountEvent, function() {
        eventDispatcher('bc_chat', chatOpenEvent, args)
      });
      chatScriptLoaded = true;
    }
  });

  autoOpenChat();
})();
