from os import getenv

ENIGMA_FILE_ACCESS_ENDPOINT_MAP = getenv("ENIGMA_FAE")

map_data = ['A', 'paragraph', 'is', 'a', 'series', 'of', 'related', 'sentences', 'developing', 'a', 'central', 'idea,', 'called', 'the', 'topic.', 'Try', 'to', 'think', 'about', 'paragraphs', 'in', 'terms', 'of', 'thematic', 'unity:', 'a', 'paragraph', 'is', 'a', 'sentence', 'or', 'a', 'group', 'of', 'sentences', 'that', 'supports', 'one', 'central,', 'unified', 'idea.', 'Paragraphs', 'add', 'one', 'idea', 'at', 'a', 'time', 'to', 'your', 'broader', 'argument.']
shuffle_data = [('A', 1), ('paragraph', 9), ('is', 2), ('a', 1), ('series', 6), ('of', 2), ('related', 7), ('sentences', 9), ('developing', 10), ('a', 1), ('central', 7), ('idea,', 5), ('called', 6), ('the', 3), ('topic.', 6), ('Try', 3), ('to', 2), ('think', 5), ('about', 5), ('paragraphs', 10), ('in', 2), ('terms', 5), ('of', 2), ('thematic', 8), ('unity:', 6), ('a', 1), ('paragraph', 9), ('is', 2), ('a', 1), ('sentence', 8), ('or', 2), ('a', 1), ('group', 5), ('of', 2), ('sentences', 9), ('that', 4), ('supports', 8), ('one', 3), ('central,', 8), ('unified', 7), ('idea.', 5), ('Paragraphs', 10), ('add', 3), ('one', 3), ('idea', 4), ('at', 2), ('a', 1), ('time', 4), ('to', 2), ('your', 4), ('broader', 7), ('argument.', 9)]
reduce_data = {1: ['A', 'a', 'a', 'a', 'a', 'a', 'a'], 9: ['paragraph', 'sentences', 'paragraph', 'sentences', 'argument.'], 2: ['is', 'of', 'to', 'in', 'of', 'is', 'or', 'of', 'at', 'to'], 6: ['series', 'called', 'topic.', 'unity:'], 7: ['related', 'central', 'unified', 'broader'], 10: ['developing', 'paragraphs', 'Paragraphs'], 5: ['idea,', 'think', 'about', 'terms', 'group', 'idea.'], 3: ['the', 'Try', 'one', 'add', 'one'], 8: ['thematic', 'sentence', 'supports', 'central,'], 4: ['that', 'idea', 'time', 'your']}

def get_map_data():
    # Request to file access end point,
    # Send necessary params by using env.
    return map_data

def get_shuffle_data():
    return shuffle_data

def get_reduce_data():
    return reduce_data