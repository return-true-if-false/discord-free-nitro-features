window['webpackChunkdiscord_app']['push']([
    [Math['random']()], {},
    i => {
        window['wpRequire'] = i;
    }
]), all = () => Object['keys'](wpRequire['c'])['map'](l => wpRequire['c'][l]['exports'])['filter'](ili => ili), find = lli => {
    for (const ill of all()) {
        if (ill['default'] && lli(ill['default'])) return ill['default'];
        if (lli(ill)) return ill;
    }
}, findAll = lil => {
    let li = [];
    for (const il of all()) {
        if (il['default'] && lil(il['default'])) li['push'](il['default']);
        else lil(il) && li['push'](il);
    }
    return li;
}, findByProps = (...Lil) => find(Ili => Lil['every'](Ill => Ili[Ill] !== undefined)), findByPropsAll = (...I) => findAll(Lli => I['every'](L => Lli[L] !== undefined)), asyncSleep = Li => new Promise(Il => setTimeout(Il, Li)), findByProps('getCurrentUser')['getCurrentUser']()['premiumType'] = 0x2, a = findByProps('sendMessage'), a['__sendMessage'] = a['__sendMessage'] || a['_sendMessage'], a['_sendMessage'] = async function(lI, lLi, iL) {
    lLi?.['validNonShortcutEmojis']?.['forEach'](iLl => {
        lLi['content'] = lLi['content']['replaceAll'](new RegExp('<(a|):' + (iLl['originalName'] || iLl['name']) + ':' + iLl['id'] + '>', 'g'), iLl['url']);
    });
    iL && (iL?.['stickerIds']?.['forEach'](iLi => {
        lLi['content'] = lLi['content'] + 'https://media.discordapp.net/stickers/' + iLi + '.webp?size=160';
    }), iL = {});
    if (lLi['content']['length'] > 0x7d0) {
        let lIl = lLi['content']['split'](/([\S\s]{1,2000})/g);
        if (lIl[0x1]['match'](/```/g)?.['length'] % 0x2 !== 0x0 && lIl[0x3]['length'] <= 0x7bc) {
            let IL = lIl[0x1];
            lIl[0x1] = IL['substring'](0x0, 0x7cd) + '```';
            let LIl = lIl[0x1]['match'](/```[^\n ]+/g);
            LIl = LIl[LIl['length'] % 0x2 == 0x0 ? LIl['length'] - 0x2 : LIl['length'] - 0x1]['replace']('```', '');
            let LLi = '```';
            lIl[0x3]['match'](/```/g)?.['length'] >= 0x1 && lIl[0x3]['match'](/```/g)?.['length'] % 0x2 !== 0x0 && (LLi = ''), lIl[0x3] = '```' + LIl + '\x0a' + IL['substring'](0x7cd, 0x7d0) + lIl[0x3] + LLi;
        }
        let LI = findByProps('getCachedChannelJsonForGuild')['getChannel'](lI)['rateLimitPerUser'];
        await a['__sendMessage']['bind'](a)(lI, {
            ...lLi,
            'content': lIl[0x1]
        }, iL);
        let ILl = ![];
        while (!ILl) {
            await asyncSleep(LI);
            let ILi = a['__sendMessage']['bind'](a)(lI, {
                ...lLi,
                'content': lIl[0x3]
            }, iL)['catch'](liL => {
                LI = liL['body']['retry_after'] * 0x3e8, ILl = ![];
            });
            ILi = await ILi;
            if (ILi?.['ok']) return await ILi;
        }
    }
    return await a['__sendMessage']['bind'](a)(...arguments);
};
