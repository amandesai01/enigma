from enigpy import EnigmaApp, EnigmaMapper, EnigmaReducer, EnigmaShuffler
from enigpy.datasource import get_map_data, get_reduce_data, get_shuffle_data

class MyMapper(EnigmaMapper):
    def map(self):
        data = get_map_data() # Array of words
        for word in data:
            self.return_array_of_tuples.append((word, len(word)))
        print(self.return_array_of_tuples)

class MyShuffler(EnigmaShuffler):
    def shuffle(self):
        data = get_shuffle_data() # Array of tuples
        for each_tuple in data:
            self.update_to_array_via_key(each_tuple[1], each_tuple[0])
        print(self.return_array_of_tuples)

class MyReducer(EnigmaReducer):
    def reduce(self):
        data = get_reduce_data() # Dict(Key -> List)
        for key in data.keys():
            current_list = data[key]
            self.return_dict[key] = len(current_list)
        print(self.return_array_of_tuples)

app = EnigmaApp()

app.set_mapper_class(MyMapper)
app.set_reducer_class(MyReducer)
app.set_shuffler_class(MyShuffler)